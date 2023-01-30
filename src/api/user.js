import axios from './axios';

export const getUsers = async () => axios({
  method: 'GET',
  url: 'users',
}, false);
