import axios from 'axios';

// const API_URL = process.env.API_URL;

const instance = axios.create({
  baseURL: 'https://node.veriscript.io/api',
  timeout: 60000
});

const request = (method, url, data) => {
  return new Promise((resolve, reject) => {
    (() => {
      const authed = localStorage.getItem('access_token');
      let header;
      if(authed!==null) {
        header = { 'Authorization': `${authed}` };
      }
      if (method === 'get') {
        return instance.request({
          url, method, params: data, headers: header
        });
      } else {
        return instance.request({
          url, method, data, headers: header
        });
      }
    })()
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err.response);
    });
  });
};

export default {
  get: (endpoint, data) => {
    return request('get', endpoint, data);
  },
  post: (endpoint, data) => {
    return request('post', endpoint, data);
  },
  put: (endpoint, data) => {
    return request('put', endpoint, data);
  },
  del: (endpoint, data) => {
    return request('delete', endpoint, data);
  },
  patch: (endpoint, data) => {
    return request('patch', endpoint, data);
  },
};
