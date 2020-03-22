import axios from 'axios'; // to make a network request over to the YouTube API
const KEY = '<YOUR_UTUBE_API_KEY_GOES_HERE>'; //change this api to your own (README.md)

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet', // a snippet summary of the entire video
        maxResults: 10,
        timeout: 1000,
        key: KEY
    }
})