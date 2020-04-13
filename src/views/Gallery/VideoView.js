import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import VideoFrame from '../VideoFrame';
import VideoInfo from './VideoInfo';
import { SurveyContext } from '../../data/providers/providers/survey';

import logo from '../../styles/assets/makemikecullenfamous.png';
import play from '../../styles/assets/play.png';
import styles from './styles/VideoView.module.scss';


const scrollDown = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });

const getImageStyle = (imgSrc) => ({
  backgroundImage: `url('${imgSrc}')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
});


const Component = ({ video, color }) => {
  const { state, actions } = useContext(SurveyContext);
  const [showVideo, setShow] = useState(false);

  const { loading, results } = state;
  const stats = results[video.id];

  useEffect(() => {
    if (!stats && !loading) {
      actions.getVideoResults(video.id);
    }
  }, [stats, actions, loading, video.id]);

  useEffect(() => {
    if (showVideo) {
      scrollDown();
    }
  }, [showVideo])

  const toggle = () => {
    const newShow = !showVideo;
    setShow(newShow);
  };

  const imgSrc = typeof video.thumbnails.max !== 'undefined'
    ? video.thumbnails.max.url
    : video.thumbnails.high.url;

  return (
    <div className={styles.view}>
      <img alt="logo" className={styles.logo} src={logo} />
      <div style={getImageStyle(imgSrc)} />
      <div className={styles.imgOverlay} />
      <div className={styles.infoContainer}>
        <img
          alt="play"
          src={play}
          className={styles.playButton}
          role="button"
          tabIndex={0}
          onClick={toggle}
          onKeyPress={toggle}
        />
        <VideoInfo
          video={video}
          stats={stats}
          color={color}
        />
      </div>
      {
        showVideo && (
          <VideoFrame
            url={video.url}
            videoID={video.id}
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
