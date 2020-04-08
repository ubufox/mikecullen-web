import React from 'react';

import VideoPlayer from '../../components/VideoPlayer';


const Component = () => {
  // skip survey option
  // arrayOfVideos
  return (
    <div>
      Survey
      <div>
        <VideoPlayer url="https://www.youtube.com/embed/PHC9Y4axJr4" />
      </div>
    </div>
  );
}

Component.displayName = 'Survey';

export default Component;
