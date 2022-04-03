import { BE_URL } from '../constants/config'
import { IExample } from '../types/example'
import api from '.'

const BASE_PATH = '/users'

export const getUsersExample = (): Promise<IExample[]> => {
  return api.get(`${BE_URL}/${BASE_PATH}/example`)
}
