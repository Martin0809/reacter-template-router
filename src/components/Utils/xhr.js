import axios from 'axios';

const xhr = axios.create({
  baseURL: window.location.origin, //  Replace your own domain name
});

xhr.interceptors.request.use(config => {
  config.withCredentials = true;
  return config;
}, error => {
  return Promise.reject(error);
});

xhr.interceptors.response.use(response => {

  if (typeof response.data === 'object') {
    return response.data.data;
  } else {
    return response.data;
  }
}, error => {
  if (error.response.status === 401) {
    console.log('对不起，您还没有登录');
  } else if (error.response.status === 403) {
    console.log('对不起，您还没有权限');
  } else {
    console.log(error.response.data.msg);
    return Promise.reject(error.response.data.msg);
  }
});

export default xhr;
