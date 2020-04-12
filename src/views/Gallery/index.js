import React, {
  useContext,
  useState,
} from 'react';

import { VideoContext } from '../../data/providers/providers/videos';
import VideoView from './VideoView';

import previousArrow from '../../styles/assets/arrow_previous.png';
import nextArrow from '../../styles/assets/arrow_next.png';
import styles from '../styles/main.module.scss';
import galleryStyles from './styles/Gallery.module.scss';


const Component = () => {
  const { state } = useContext(VideoContext);
  const [showIndex, setIndex] = useState(0);

  const { videos } = state;

  const next = () => {
    if (showIndex === videos.length - 1) {
      setIndex(0);
    } else {
      setIndex(showIndex + 1)
    }
  };
  const previous = () => {
    if (showIndex === 0) {
      setIndex(videos.length - 1);
    } else {
      setIndex(showIndex - 1);
    }
  };

  const videoViews = videos.map((v) => (
    <VideoView key={`video-${v.id}`} video={v} />
  ));

  return (
    <div className={styles.view}>
      { videoViews[showIndex] }
      <div className={galleryStyles.navigation}>
        <div
          alt="previous"
          className={galleryStyles.previous}
          role="button"
          tabIndex={0}
          onClick={previous}
          onKeyPress={previous}
        >
          <img alt="previous" src={previousArrow} />
          Previous
        </div>
        <div
          alt="next"
          className={galleryStyles.next}
          role="button"
          tabIndex={0}
          onClick={next}
          onKeyPress={next}
        >
          Next
          <img alt="next" src={nextArrow} />
        </div>
      </div>
    </div>
  );
};

Component.displayName = 'Gallery';

export default Component;
