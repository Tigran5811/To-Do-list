import axios from 'axios';

const instance = axios.create();
instance.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
instance.defaults.method = 'POST';

instance.interceptors.response.use((config) => config.data, (config) => {
  const status = config.response;

  if (status === 403 || status === 401) {
    localStorage.removeItem('token');
  }

  return Promise.reject(config.response);
});

export default (config, withToken = true) => {
  const request = instance({
    ...config,
    headers: withToken ? {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    } : {},
  });
  return request;
};
