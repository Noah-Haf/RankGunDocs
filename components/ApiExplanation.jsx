import { Note, Avatar } from '@geist-ui/core';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ApiExplanation() {
  const [loading, setLoading] = useState(false);
  const { resolvedTheme } = useTheme();

  const renderNote = () => (
    <div className="note-padding">
      <Note
        type={resolvedTheme === 'dark' ? 'success' : 'default'}
        filled={resolvedTheme === 'dark'}
      >
        An application programming interface (API) is a way for two or more
        computer programs to communicate with each other.
        <br />
        <br />
        <Avatar
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/220px-Wikipedia-logo-v2.svg.png"
        />
        <strong> Wikipedia</strong>
      </Note>
    </div>
  );

  return (
    <>
      {loading ? (
        <div className="note-placeholder" style={{ height: '50px' }} />
      ) : (
        renderNote()
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
