import { AxiosResponse } from 'axios'
import api from '..'
import { IDroplet } from '../../types/digitalOcean/droplet'

const BASE_PATH = '/do-api/droplets'

export async function getDroplets(): Promise<IDroplet[]> {
  const response: AxiosResponse = await api.get(`${BASE_PATH}`)
  const { droplets } = response?.data ?? {}

  return droplets
}
