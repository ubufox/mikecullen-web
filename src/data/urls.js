// const API_PREFIX = process.env.NODE_ENV === 'production'
//   ? 'https://us-central1-mikecullen-10c1b.cloudfunctions.net/v1'
//   : 'http://localhost:5001/mikecullen-10c1b/us-central1/v1/';
const API_PREFIX = 'https://us-central1-mikecullen-10c1b.cloudfunctions.net/v1';


export const API_GET_VIDEOS_ENDPOINT = `${API_PREFIX}/video/videos`
export const SURVEY_API = `${API_PREFIX}/survey`;
export const API_GET_VIDEO_RESULTS_ENDPOINT = `${SURVEY_API}/videoStats/{{videoID}}`;
export const API_SAVE_SURVEY_ENDPOINT = `${SURVEY_API}/saveSelection`;
export const API_GET_CHOICES_ENDPOINT = `${SURVEY_API}/getVideoChoices/{{videoID}}`;
