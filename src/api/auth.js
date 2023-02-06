import axios from './axios';

export const signUp = async (data) => axios({
  method: 'post',
  url: '/auth/signup',
  data,
}, false);

export const VerifyEmail = async (data) => axios({
  method: 'post',
  url: '/auth/verify-email',
  data,
}, false);

export const signIn = async (data) => axios({
  method: 'post',
  url: '/auth/signin',
  data,
}, false);
