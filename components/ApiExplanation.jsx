import { Note, Avatar } from '@geist-ui/react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

function RenderNote() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="note-padding">
      <Note
        type={resolvedTheme === 'dark' ? 'success' : 'default'}
        filled={resolvedTheme === 'dark'}
        key={resolvedTheme}
      >
        An application programming interface (API) is a way for two or more computer programs to communicate with each other.
        <br />
        <br />
        <Avatar
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/220px-Wikipedia-logo-v2.svg.png"
        />
        <strong> Wikipedia</strong>
      </Note>
    </div>
  );
}

export default function ApiExplanation() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <div className="note-placeholder" style={{ height: '50px' }} />
      ) : (
        <RenderNote />
      )}
      <style jsx>{`
        .note-placeholder {
          width: 100%;
        }

        .note-padding {
          padding-top: 10px;
          padding-bottom: 10px;
        }
      `}</style>
    </>
  );
}
