import React from 'react';
import MediaQuery from 'react-responsive';

const Component = ({
  title,
  url,
}) => {
  return (
    <>
      <iframe
        title={title}
        width="540"
        height="304"
        src={`https://${url}?autoplay=1&rel=0`}
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; encrypted-media;"
      >
      </iframe>
    </>
  );
};

export default Component;
