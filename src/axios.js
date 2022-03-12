import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-23e58.cloudfunctions.net/api'  // THE API (cloud function) URL
});

export default instance;


// 'http://localhost:5001/clone-23e58/us-central1/api'