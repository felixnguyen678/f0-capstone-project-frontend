import { AxiosResponse } from 'axios'
import { ILoginRequest } from './../types/authenticate'
import { IUser } from './../types/user'
import api from './'
const BASE_PATH = '/auth'

export async function login(data: ILoginRequest): Promise<{ token: string }> {
  const response: AxiosResponse = await api.post(`${BASE_PATH}/login`, data)
  return response.data
}

export async function getMyProfile(): Promise<IUser> {
  const response: AxiosResponse = await api.get(`${BASE_PATH}/profile`)
  return response.data
}
