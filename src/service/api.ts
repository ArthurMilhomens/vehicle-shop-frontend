import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const api = axios.create({
    baseURL: "https://vhcshop-9f1d38fe63c8.herokuapp.com/",
});

const user = cookies.get('user');

user && (api.defaults.headers.common['Authorization'] = `${user.accessToken}`);