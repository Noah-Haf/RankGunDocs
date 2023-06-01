/* eslint-env node */
import * as React from "react";
import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const config = {
    runtime: "edge",
};

const font = fetch("https://docs.rankgun.works/fonts/AftikaBold.ttf").then(res =>
    res.arrayBuffer(),
);

export default async function OG(req: NextRequest) {
    const aftika = await font;

    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
        ? searchParams.get("title")?.slice(0, 100)
        : "RankGun Documentation";

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: 80,
                    backgroundColor: "#030303",
                    backgroundImage:
                        "radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)",
                    backgroundSize: "100px 100px",
                    backgroundPosition: "-30px -10px",
                    fontWeight: 600,
                    color: "white",
                }}
            >

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60" height="60"
                    viewBox="0 0 98 98"
                    style={{ position: "absolute", top: 70, left: 80 }}
                >
                    <path
                        d="m64.3,0h-30.74c-3.1,0-6.06,1.27-8.32,3.38L3.38,25.24c-2.26,2.26-3.38,5.22-3.38,8.32v30.88c0,3.1,1.27,6.06,3.38,8.32l21.86,21.86c2.26,2.26,5.22,3.38,8.32,3.38h30.88c3.1,0,6.06-1.27,8.32-3.38l21.86-21.86c2.26-2.26,3.38-5.22,3.38-8.32v-30.88c0-3.1-1.27-6.06-3.38-8.32L72.62,3.38c-2.12-2.12-5.22-3.38-8.32-3.38h0Z"
                        fill="currentColor"
                    />
                    {/* <text
                        transform="translate(132.5 75)"
                        style={{
                            fontSize: '50px',
                            letterSpacing: '-.01em',
                        }}
                        fill="currentColor"
                    >
                        <tspan x="0" y="0">R</tspan>
                        <tspan x="46.05" y="0">ankGun</tspan>
                    </text> */}
                </svg>
                <span style={{
                            fontSize: '45px',
                            letterSpacing: '-.01em',
                            position: "absolute",
                            top: "81px",
                            left: 155
                        }}>RankGun</span>
                
                
                <p
                    style={{
                        position: "absolute",
                        bottom: 70,
                        left: 80,
                        margin: 0,
                        fontSize: 30,
                        letterSpacing: -1,
                    }}
                >
                    Elevate your group to new heights
                </p>
                <h1
                    style={{
                        fontSize: 82,
                        margin: "0 0 0 -2px",
                        lineHeight: 1.1,
                        textShadow: "0 2px 30px #000",
                        letterSpacing: -2,

                        // backgroundImage: "linear-gradient(90deg, #fff 40%, #aaa)",
                        // backgroundClip: "text",

                        // WebkitBackgroundClip: "text",
                        // color: "transparent",
                        color: "white",
                    }}
                >
                    {title}
                </h1>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "AftikaBold",
                    data: aftika,
                    style: "normal",
                },
            ],
        },
    );
}