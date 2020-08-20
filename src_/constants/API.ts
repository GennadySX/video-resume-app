/*
 * GennadySX @2020
 */

export const Bearer = 'bearer_token'
const origin = 'http://192.168.1.36:3001'

export const API = {
    is: origin,
    getUser: '/api/users/me',
    login: '/api/users/login/firebase',
    signUp: '/api/users/signup',
    updateMe: '/api/users/me',
}
