const GOOGLE_API_KEY = 'AIzaSyD8R6TTVKCwxW6XebeHUGoZY5HmUVpv8QE';

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=40&regionCode=IN&key=${GOOGLE_API_KEY}`;
