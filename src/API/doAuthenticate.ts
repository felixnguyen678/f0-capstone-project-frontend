import { AxiosResponse } from 'axios'
import { IDOAccount } from '../types/doAccount'
import api from './'

const BASE_PATH = '/do-api'

export async function authenticateDO(): Promise<IDOAccount> {
  const response: AxiosResponse = await api.post(`${BASE_PATH}/account`)
  const { account } = response.data
  return account
}
