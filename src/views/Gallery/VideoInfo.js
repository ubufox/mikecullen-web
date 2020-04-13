import React from 'react';
import { DateTime } from 'luxon';
import _ from 'lodash';

import styles from './styles/VideoInfo.module.scss';

const formatDate = (date) => DateTime.fromISO(date).toFormat('L - d - yyyy');

const findMax = (stats) => {
  const maxItem = stats.reduce((acc, s) => {
    if (s.count > acc.max) {
      acc = {
        max: s.count,
        choice: s,
      };
    }

    return acc;
  }, { max: 0 });

  return maxItem.choice;
};

const getMaxCount = (stats) => {
  const maxChoice = findMax(_.values(stats));
  return maxChoice.count;
};

const getMaxResponse = (stats) => {
  const maxChoice = findMax(_.values(stats));
  return maxChoice.text;
};


const Component = ({
  video,
  stats,
  color,
}) => {
  const countStyles = [styles.count, styles[color]];

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
      {
        stats && _.values(stats).length > 0
          ? (
            <div className={styles.stats}>
              <div className={countStyles.join(' ')}>
                { getMaxCount(stats) }
              </div>
              <div className={styles.choice}>
                viewers said&nbsp;&quot;
                <span>
                  { getMaxResponse(stats) }
                </span>
                &quot;
              </div>
            </div>
          )
          : null
      }
    </div>
  );
};

Component.displayName = 'VideoInfo';

export default Component;
