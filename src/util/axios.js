import axios from 'axios'

const baseURL = 'https://api.finlogix.com/v1'

export const axiosNoAuth = axios.create({
  baseURL,
})

export const axiosAuth = (() => {
  const instance = axios.create({ baseURL })
  instance.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return request
  })
  return instance
})()
