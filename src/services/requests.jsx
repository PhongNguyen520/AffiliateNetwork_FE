import axios from 'axios';
axios.defaults.withCredentials = true;
const requests = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    withCredentials: true,
});

export const requestsPrivate = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});

export default requests;