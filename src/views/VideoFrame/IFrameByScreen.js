import React from 'react';

import styles from './iframe.module.scss';

const Component = ({
  title,
  url,
}) => {
  return (
    <div className={styles.iframeContainer}>
      <iframe
        className={styles.iframeElement}
        title={title}
        src={`https://${url}?autoplay=1&rel=0`}
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; encrypted-media;"
      >
      </iframe>
    </div>
  );
};

export default Component;
