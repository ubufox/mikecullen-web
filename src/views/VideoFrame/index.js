import React from 'react';

import Survey from '../../components/Survey';
import IFrameByScreen from './IFrameByScreen';

import styles from './styles.module.scss';
import closeX from '../../styles/assets/close_x.svg';


const Component = ({
  videoID,
  title,
  url,
  closeFunc,
}) => (
  <div className={styles.container}>
    <div
      alt="close video"
      className={styles.close}
      role="button"
      tabIndex={0}
      onClick={closeFunc}
      onKeyPress={closeFunc}
    >
      <span className={styles.closeText}>
        close
      </span>
      <img
        alt="close"
        className={styles.icon}
        src={closeX}
      />
    </div>
    <div className={styles.splitView}>
      <div className={styles.leftSide}>
        <IFrameByScreen title={title} url={url} />
      </div>
      <div className={styles.rightSide}>
        <Survey videoID={videoID} />
      </div>
    </div>
  </div>
);


export default Component;
