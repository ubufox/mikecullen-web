import axios from 'axios';

import {
  API_GET_CHOICES_ENDPOINT,
  API_SAVE_SURVEY_ENDPOINT,
  API_GET_VIDEO_RESULTS_ENDPOINT,
} from '../../urls';

export const GET_CHOICES = 'GET_CHOICES';
export const GET_CHOICES_FAILURE = 'GET_CHOICES_FAILURE';
export const GET_CHOICES_SUCCESS = 'GET_CHOICES_SUCCESS';
export const SUBMIT_CHOICE = 'SUBMIT_CHOICE';
export const SUBMIT_CHOICE_FAILURE = 'SUBMIT_CHOICE_FAILURE';
export const SUBMIT_CHOICE_SUCCESS = 'SUBMIT_CHOICE_SUCCESS';
export const GET_VIDEO_RESULTS = 'GET_VIDEO_RESULTS';
export const GET_VIDEO_RESULTS_FAILURE = 'GET_VIDEO_RESULTS_FAILURE';
export const GET_VIDEO_RESULTS_SUCCESS = 'GET_VIDEO_RESULTS_SUCCESS';


export const getChoices = (dispatch) => async (videoID) => {
  dispatch({ type: GET_CHOICES });

  try {
    const url = API_GET_CHOICES_ENDPOINT.replace('{{videoID}}', videoID);
    const res = await axios.get(url);

    dispatch({
      type: GET_CHOICES_SUCCESS,
      data: {
        videoID,
        choices: res.data,
      },
    });
  } catch (e) {
    dispatch({
      type: GET_CHOICES_FAILURE,
      error: e,
    });
  }
};


export const submitChoice = (dispatch) => async (videoID, choiceID) => {
  dispatch({ type: SUBMIT_CHOICE });

  try {
    await axios.post(API_SAVE_SURVEY_ENDPOINT, { choiceID, videoID });

    dispatch({ type: SUBMIT_CHOICE_SUCCESS });
  } catch (e) {
    dispatch({
      type: SUBMIT_CHOICE_FAILURE,
      error: e,
    });
  }
};


export const getVideoResults = (dispatch) => async (videoID) => {
  dispatch({ type: GET_VIDEO_RESULTS });

  try {
    const url = API_GET_VIDEO_RESULTS_ENDPOINT.replace('{{videoID}}', videoID);
    const res = await axios.get(url);

    dispatch({
      type: GET_VIDEO_RESULTS_SUCCESS,
      data: {
        videoID,
        results: res.data,
      },
    });
  } catch (e) {
    dispatch({
      type: GET_VIDEO_RESULTS_FAILURE,
      error: e,
    });
  }
};

const surveyActionsWithContext = (dispatch) => ({
  getChoices: getChoices(dispatch),
  submitChoice: submitChoice(dispatch),
  getVideoResults: getVideoResults(dispatch),
});

export default surveyActionsWithContext;
