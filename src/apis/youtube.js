import axios from 'axios';

const KEY='AIzaSyDUZf-w25dB-Vh15NcjEdzIvy0v-JilLGs';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'viedo',
        maxResults:5,
        key: KEY
    }
});