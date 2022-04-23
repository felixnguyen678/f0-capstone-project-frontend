import { AxiosResponse } from 'axios'
import api from '..'
import { IContainer } from '../../types/digitalOcean/container'

const BASE_PATH = '/do-api/containers'

export async function getContainers(hostId: number, keyword?: string): Promise<IContainer[]> {
  let url = `${BASE_PATH}?hostId=${hostId}`

  if (keyword) {
    url += `&keyword=${keyword}`
  }

  const response: AxiosResponse = await api.get(url)

  return response?.data
}
