import { AxiosResponse } from 'axios'
import { IDoAccount } from '../types/doAccount'
import api from './'

const BASE_PATH = '/do-api'

export async function authenticateDo(): Promise<IDoAccount> {
  const response: AxiosResponse = await api.post(`${BASE_PATH}/account`)
  const { account } = response.data
  return account
}
