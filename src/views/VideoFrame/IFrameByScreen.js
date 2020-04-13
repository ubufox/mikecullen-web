import React from 'react';
import MediaQuery from 'react-responsive';

import {
  MOBILE_WIDTH,
  IPAD_WIDTH,
} from '../../styles/media_queries';


const Component = ({
  title,
  url,
}) => {
  return (
    <>
      <MediaQuery maxWidth={MOBILE_WIDTH}>
        <iframe
          title={title}
          width="320"
          height="180"
          src={`https://${url}?autoplay=1&rel=0`}
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; encrypted-media;"
        >
        </iframe>
      </MediaQuery>
      <MediaQuery maxWidth={IPAD_WIDTH} minWidth={MOBILE_WIDTH}>
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
      </MediaQuery>
      <MediaQuery minWidth={IPAD_WIDTH}>
        <iframe
          title={title}
          width="625"
          height="351"
          src={`https://${url}?autoplay=1&rel=0`}
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; encrypted-media;"
        >
        </iframe>
      </MediaQuery>
    </>
  );
};

export default Component;
