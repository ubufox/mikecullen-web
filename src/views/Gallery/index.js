import React, {
  useContext,
  useState,
} from 'react';

import { VideoContext } from '../../data/providers/providers/videos';
import VideoView from './VideoView';

import styles from '../styles/main.module.scss';
import galleryStyles from './styles/Gallery.module.scss';


const Component = () => {
  const { state } = useContext(VideoContext);
  const [showIndex, setIndex] = useState(0);

  const { videos } = state;
  console.log('videos');
  console.log(videos);

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
        </div>
      </div>
    </div>
  );
};

Component.displayName = 'Gallery';

export default Component;
