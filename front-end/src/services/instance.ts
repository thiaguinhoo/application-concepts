import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 1000,
  headers: {
    Authorization: localStorage.getItem('GetToken'),
  },
});
