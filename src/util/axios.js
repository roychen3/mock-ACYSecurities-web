import axios from 'axios'

const baseURL = 'https://api.finlogix.com/v1'

export const axiosNoAuth = axios.create({
  baseURL,
})

export const axiosAuth = axios.create({
  baseURL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  }
})
