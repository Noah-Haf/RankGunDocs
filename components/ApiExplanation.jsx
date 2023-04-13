import { Note, Avatar } from '@geist-ui/core';
import { useState, useEffect } from 'react';

export default function ApiExplanation() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <div className='note-placeholder' style={{ width: '100%', height: '50px' }}></div>}
      {!loading && (
        <div className='note-padding'>
          <Note>An application programming interface (API) is a way for two or more computer programs to communicate with each other.<br/><br/> <Avatar src={"https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/220px-Wikipedia-logo-v2.svg.png"} /><strong> Wikipedia</strong></Note>
        </div>
      )}
      <style
        jsx>{`
          .note-padding {
            padding-top: 10px;
            padding-bottom: 10px;
          }
        `}
      </style>
    </>
  );
}
