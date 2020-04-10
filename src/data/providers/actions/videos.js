import axios from 'axios';
import _ from 'lodash';

import { API_GET_VIDEOS_ENDPOINT } from '../../urls';


export const GET_VIDEOS = 'GET_VIDEOS';
export const GET_VIDEOS_FAILURE = 'GET_VIDEOS_FAILURE';
export const GET_VIDEOS_SUCCESS = 'GET_VIDEOS_SUCCESS';


export const getVideos = (dispatch) => async () => {
  dispatch({ type: GET_VIDEOS });

  try {
    const res = await axios.get(API_GET_VIDEOS_ENDPOINT);

    dispatch({
      type: GET_VIDEOS_SUCCESS,
      data: _.values(res.data),
    });
  } catch (e) {
    dispatch({
      type: GET_VIDEOS_FAILURE,
      error: e,
    });
  }
};

const videoActionsWithContext = (dispatch) => ({
  getVideos: getVideos(dispatch),
});

export default videoActionsWithContext;
