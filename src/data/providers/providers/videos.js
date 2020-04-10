import React, {
  useEffect,
  useReducer,
} from 'react';

import reducer, { defaultState } from '../reducers/videos';
import videoActions, { getVideos } from '../actions/videos';


export const VideoContext = React.createContext();


const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const actions = videoActions(dispatch);

  useEffect(() => {
    getVideos(dispatch)();
  }, [dispatch]);

  const providedValue = {
    state,
    actions,
  };

  return (
    <VideoContext.Provider value={providedValue}>
      { children }
    </VideoContext.Provider>
  );
};

export default VideoProvider;
