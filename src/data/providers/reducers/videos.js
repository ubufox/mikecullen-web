import {
  GET_VIDEOS,
  GET_VIDEOS_FAILURE,
  GET_VIDEOS_SUCCESS,
} from '../actions/videos';


export const defaultState = {
  loading: true,
  videos: [],
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_VIDEOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case GET_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
