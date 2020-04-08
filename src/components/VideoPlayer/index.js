import React from 'react';

const Component = ({ url }) => {
  return (
    <div>
      <iframe
        title="Mike Video"
        width="560"
        height="315"
        src={url}
        frameborder="0"
        allow="autoplay; encrypted-media;"
        allowfullscreen>
      </iframe>
    </div>
  );
}

Component.displayName = 'VideoPlayer';

export default Component;
