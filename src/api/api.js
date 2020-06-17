import axios from 'axios'

let base = ''
// let url = 'https://jxshouse.club/'
let url = '/api/'
export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data) }

export const getCoinList = params => { return axios.get(url + params, params).then(res => res.data) }

export const selectmyfond = params => { return axios.get(url + params, params).then(res => res.data) }

export const updatemyfond80 = params => { return axios.get(url + params, params).then(res => res.data) }
export const updatemyfond81 = params => { return axios.get(url + params, params).then(res => res.data) }
