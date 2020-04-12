import React from 'react';
import { DateTime } from 'luxon';

import styles from './styles/VideoInfo.module.scss';

const formatDate = (date) => DateTime.fromISO(date).toFormat('L - d - yyyy');

const findMax = (stats) => {
};

const getMaxCount = (stats) => {
  return 349;
};

const getMaxResponse = (stats) => {
  return "This guy is a sober version of Seth Rogen and I'm here for it.";
};


const Component = ({ video, stats }) => {
  return (
    <div>
      <div className={styles.title}>
        { video.title }
      </div>
      <div className={styles.description}>
        { formatDate(video.publishedAt) }
        <div className={styles.divider} />
        { video.description }
      </div>
      <div className={styles.stats}>
        <div className={styles.count}>
          { getMaxCount(stats) }
        </div>
        <div className={styles.choice}>
          { getMaxResponse(stats) }
        </div>
      </div>
    </div>
  );
};

Component.displayName = 'VideoInfo';

export default Component;
