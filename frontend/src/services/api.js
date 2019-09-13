import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jkbox-backend.herokuapp.com'
})

export default api;