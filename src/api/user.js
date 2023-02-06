import axios from './axios';

export const getUsers = async () => axios({
  method: 'GET',
  url: 'user',
}, localStorage.getItem('token'));

export const getUser = async (id) => {
  const users = await getUsers();
  const user = users.find((item) => item.id === id);

  return user;
};
