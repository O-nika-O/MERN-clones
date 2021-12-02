import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clone-420.herokuapp.com'
});

export default instance;
