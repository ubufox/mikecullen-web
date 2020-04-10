import React, { useState } from 'react';

import styles from './styles/VideoView.module.scss';

const VideoFrame = ({
  title,
  url,
  closeFunc,
}) => (
  <div className={styles.frame}>
    <div>
      <div
        alt="close video"
        className={styles.close}
        role="button"
        tabIndex={0}
        onClick={closeFunc}
        onKeyPress={closeFunc}
      >
        Close
      </div>
      <iframe
        title={title}
        width="560"
        height="315"
        src={`https://${url}`}
        frameborder="0"
        allow="autoplay; encrypted-media;"
        allowfullscreen="true"
      >
      </iframe>
    </div>
  </div>
);

const Component = ({ video }) => {
  const [showVideo, setShow] = useState(false);

  const toggle = () => setShow(!showVideo);

  const imgSrc = typeof video.thumbnails.max !== 'undefined'
    ? video.thumbnails.max.url
    : video.thumbnails.high.url;

  return (
    <div className={styles.view}>
      <img
        alt="video preview"
        className={styles.bgImg}
        src={imgSrc}
      />
      <div className={styles.imgOverlay} />
      <div className={styles.infoContainer}>
        <div className={styles.title}>
          { video.title }
        </div>
        <div className={styles.description}>
          { video.description }
        </div>
        <div
          alt="view video"
          role="button"
          tabIndex={0}
          onClick={toggle}
          onKeyPress={toggle}
        >
          View
        </div>
      </div>
      {
        showVideo && (
          <VideoFrame
            url={video.url}
            title={video.title}
            closeFunc={() => setShow(false)}
          />
        )
      }
    </div>
  );
};

Component.displayName = 'VideoView';

export default Component;
