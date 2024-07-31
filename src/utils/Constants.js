const GOOGLE_API_KEY = 'AIzaSyD8R6TTVKCwxW6XebeHUGoZY5HmUVpv8QE';

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=40&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

// Live chats count
export const LIVE_CHAT_COUNT = 10;