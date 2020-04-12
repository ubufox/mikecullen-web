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
        width="800"
        height="450"
        src={`https://${url}?autoplay=1`}
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; encrypted-media;"
      >
      </iframe>
    </>
  );
};

export default Component;
