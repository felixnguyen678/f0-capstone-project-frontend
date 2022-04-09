import api, { auth } from '../'
import { ILoginRequest } from './../../types/authenticate/index'
import { IUser } from './../../types/user/index'
const BASE_PATH = '/auth'

export async function login(data: ILoginRequest): Promise<{ token: string }> {
  try {
    const response = await api.post(`${BASE_PATH}/login`, data)
    return response.data
  } catch (error: any) {
    throw new Error(error?.message)
  }
}

export async function getMyProfile(): Promise<IUser> {
  try {
    const response = await api.get(`/auth/profile`, {
      headers: auth()
    })
    return response.data
  } catch (error: any) {
    throw new Error(error?.message)
  }
}
