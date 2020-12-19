import axios from 'axios';

const URL = 'http://localhost:8080/products/';

const headers = {
  'Access-Control-Allow-Origin': '*',
};

const instance = axios.create({
  baseURL: URL,
  headers,
  timeout: 30 * 1000,
});

export default instance;
