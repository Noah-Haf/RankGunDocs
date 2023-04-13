import { Code } from '@geist-ui/core';
import { useState, useEffect } from 'react';

export default function ApiExplanation(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <div className='code-placeholder' style={{ width: '100%', height: '50px' }}></div>}
      {!loading && (
        <div className='code-padding' >
          <Code block my={0}>{props.code}</Code>
        </div>
      )}
      <style
        jsx>{`
          .code-padding {
            padding-left: 3px;
          }
        `}
      </style>
    </>
  );
}
