import React from 'react';

import Survey from '../../components/Survey';
import IFrameByScreen from './IFrameByScreen';

import styles from './styles.module.scss';


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
      Close
    </div>
    <div>
      <div>
        <IFrameByScreen title={title} url={url} />
      </div>
      <div>
        <Survey videoID={videoID} />
      </div>
    </div>
  </div>
);


export default Component;
