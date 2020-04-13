import React from 'react';
import MediaQuery from 'react-responsive';

import {
  MOBILE_WIDTH,
  XL_MOBILE_WIDTH,
  IPAD_WIDTH,
} from '../../styles/media_queries';


const Component = ({
  title,
  url,
}) => {
  return (
    <>
      <MediaQuery maxWidth={374}>
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
      <MediaQuery minWidth={375} maxWidth={MOBILE_WIDTH - 1}>
        <iframe
          title={title}
          width="375"
          height="210"
          src={`https://${url}?autoplay=1&rel=0`}
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; encrypted-media;"
        >
        </iframe>
      </MediaQuery>
      <MediaQuery maxWidth={XL_MOBILE_WIDTH - 1} minWidth={MOBILE_WIDTH}>
        <iframe
          title={title}
          width="414"
          height="232"
          src={`https://${url}?autoplay=1&rel=0`}
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; encrypted-media;"
        >
        </iframe>
      </MediaQuery>
      <MediaQuery minWidth={XL_MOBILE_WIDTH}>
        <iframe
          title={title}
          width="600"
          height="337"
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
