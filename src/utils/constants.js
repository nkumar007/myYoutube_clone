const API_KEY = "AIzaSyA71kd7H4fuQcjO4Fc8eZam3OFmbfpUkvA";
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const OFFSET_LIVE_CHAT = 20;
export const SURFING_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${API_KEY}&q=`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
