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

const COLOR_OPTIONS = [
  'pink',
  'green',
  'red',
  'yellow',
];

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

  let colorIdx = 0;

  const videoViews = videos.map((v) => {
    const color = COLOR_OPTIONS[colorIdx];
    if (colorIdx === 3) {
      colorIdx = 0;
    } else {
      colorIdx += 1;
    }

    return (
      <VideoView
        key={`video-${v.id}`}
        video={v}
        color={color}
      />
    );
  });

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
          <img
            alt="previous"
            className={galleryStyles.previousArrow}
            src={previousArrow}
          />
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
          <img
            alt="next"
            className={galleryStyles.nextArrow}
            src={nextArrow}
          />
        </div>
      </div>
    </div>
  );
};

Component.displayName = 'Gallery';

export default Component;
