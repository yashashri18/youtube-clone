export const BTN_ITEMS = ["All", "News", "Cooking", "Entertainment", "Sports", "Art", "Movies", "Songs","All", "News", "Cooking"]

const  YOUTUBE_API_KEY = "AIzaSyCTYwJ5hQvgu59DAwYrHJfPvhVCIBQjeHo"

export const YOUTUBE_FETCH_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+YOUTUBE_API_KEY 

export const YOUTUBE_SEARCH_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";