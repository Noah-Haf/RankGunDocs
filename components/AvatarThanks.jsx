import { Avatar } from '@geist-ui/core';
import { useState, useEffect } from 'react';

export default function ApiExplanation() {
  const [loading, setLoading] = useState(true);
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/Noah-Haf/RankGunDocs/contributors')
      .then((response) => response.json())
      .then((data) => {
        setContributors(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {loading && (
        <div className='avatar-placeholder' style={{ width: '100%', height: '50px' }}></div>
      )}
      {!loading && (
        <div className='avatar-padding'>
          <Avatar.Group>
            {contributors.map((contributor) => (
              <Avatar key={contributor.id} src={contributor.avatar_url} stacked />
            ))}
          </Avatar.Group>
          </div>
      )}
      <style jsx>{`
        .avatar-padding {
          padding-top: 10px;
          padding-bottom: 10px;
        }
      `}</style>
    </>
  );
}
