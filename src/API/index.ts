import axios, { AxiosRequestConfig } from 'axios'
import { ELocalStorageKeys } from '../constants/enums/localStorage'
import { BE_URL } from './../constants/config'
import { ERequestHeader } from './../constants/enums/requestHeader'

const api = axios.create({
  baseURL: BE_URL
})

api.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    let customizedConfig = { ...config }
    if (customizedConfig.headers) {
      const accessTokenKey = ELocalStorageKeys.ACCESS_TOKEN
      const doTokenKey = ELocalStorageKeys.DO_TOKEN

      const accessToken = localStorage.getItem(accessTokenKey) || ''
      const doToken = localStorage.getItem(doTokenKey) || ''

      customizedConfig.headers[ERequestHeader.AUTHORIZATION] = `Bearer ${accessToken}`
      customizedConfig.headers[ERequestHeader.DO_AUTHORIZATION] = doToken
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

export default api
