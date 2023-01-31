import axios from './axios';

export const getUsers = async () => axios({
  method: 'GET',
  url: 'users',
}, false);

export const getUser = async (id) => {
  const users = await getUsers();
  const user = users.find((item) => item.id === id);

  return user;
};
