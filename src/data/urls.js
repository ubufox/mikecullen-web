const API_PREFIX = process.env.NODE_ENV === 'production'
  ? 'https://us-central1-mikecullen-10c1b.cloudfunctions.net/v1'
  : 'http://localhost:5001/mikecullen-10c1b/us-central1/v1/';


export const API_GET_VIDEOS_ENDPOINT = `${API_PREFIX}/video/videos`
