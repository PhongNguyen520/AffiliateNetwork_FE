import axios from 'axios';
import {jwtDecode} from "jwt-decode";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;

const requests = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
});

export const requestsPrivate = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: { 'Content-Type': 'application/json' },
});

requestsPrivate.interceptors.request.use(
    (config) => {
        const token = Cookies.get('access_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default requests;