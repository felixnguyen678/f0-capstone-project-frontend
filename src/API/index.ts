import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import { ELocalStorageKeys } from '../constants/enums/localStorage'
import { BE_URL } from './../constants/config'

const api = axios.create({
  baseURL: BE_URL
})

api.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    let customizedConfig = { ...config }
    if (customizedConfig.headers) {
      const tokenKey = ELocalStorageKeys.ACCESS_TOKEN
      const accessToken = localStorage.getItem(tokenKey) || ''
      customizedConfig.headers.Authorization = `Bearer ${accessToken}`
    }

    return customizedConfig
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export function auth(): AxiosRequestHeaders {
  const headers = { authorization: '' }
  const tokenKey = ELocalStorageKeys.ACCESS_TOKEN
  const accessToken = localStorage.getItem(tokenKey) || ''
  headers.authorization = `Bearer ${accessToken}`

  return headers
}

export default api
