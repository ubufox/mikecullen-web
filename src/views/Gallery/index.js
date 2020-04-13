import React, {
  useContext,
  useState,
} from 'react';

import { VideoContext } from '../../data/providers/providers/videos';
import VideoView from './VideoView';

import styles from '../styles/main.module.scss';

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
        previous={previous}
        next={next}
      />
    );
  });

  return (
    <div className={styles.view}>
      { videoViews[showIndex] }
    </div>
  );
};

Component.displayName = 'Gallery';

export default Component;
