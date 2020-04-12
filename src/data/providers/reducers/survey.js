import {
  GET_CHOICES,
  GET_CHOICES_FAILURE,
  GET_CHOICES_SUCCESS,
  SUBMIT_CHOICE,
  SUBMIT_CHOICE_FAILURE,
  SUBMIT_CHOICE_SUCCESS,
  GET_VIDEO_RESULTS,
  GET_VIDEO_RESULTS_FAILURE,
  GET_VIDEO_RESULTS_SUCCESS,
} from '../actions/survey';


export const defaultState = {
  results: {},
  choices: {},
  loading: false,
  error: null,
};


const reducer = (state, action) => {
  switch (action.type) {
    case GET_CHOICES:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CHOICES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case GET_CHOICES_SUCCESS:
      return {
        ...state,
        loading: false,
        choices: {
          ...state.choices,
          [action.data.videoID]: action.data.choices,
        },
      };
    case SUBMIT_CHOICE:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SUBMIT_CHOICE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SUBMIT_CHOICE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case GET_VIDEO_RESULTS:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case GET_VIDEO_RESULTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case GET_VIDEO_RESULTS_SUCCESS:
      return {
        ...state,
        loading: false,
        results: {
          ...state.results,
          [action.data.videoID]: action.data.results,
        },
      }
    default:
      return state;
  }
};

export default reducer;
