import axios from 'axios';

const URI = 'http://localhost:5000/api';

export const api = axios.create({
    baseURL: URI,
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
})