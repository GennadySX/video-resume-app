/*
 * GennadySX @2020
 */

export const Bearer = 'bearer_token';
const origin = 'http://192.168.1.36:3001';

export const API = {
  is: origin,
  getUser: '/api/users/me',
  login: '/api/users/login/firebase',
  signUp: '/api/users/signup',
  updateMe: '/api/users/me',
};

export const VKAPI = {
  id: '7579997',
};

export const FacebookAPI = {
  id: '324012878820483',
  secret: 'b9a3448558f63661a59606eeaf93f79f',
};
