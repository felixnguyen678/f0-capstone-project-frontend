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

export async function getContainer(id: string, hostId: number): Promise<IContainer> {
  let url = `${BASE_PATH}/${id}?hostId=${hostId}`

  const response: AxiosResponse = await api.get(url)

  return response?.data
}

export async function startContainer(id: string, hostId: number): Promise<void> {
  let url = `${BASE_PATH}/${id}/start?hostId=${hostId}`

  await api.post(url)
}

export async function restartContainer(id: string, hostId: number): Promise<void> {
  let url = `${BASE_PATH}/${id}/restart?hostId=${hostId}`

  await api.post(url)
}

export async function stopContainer(id: string, hostId: number): Promise<void> {
  let url = `${BASE_PATH}/${id}/stop?hostId=${hostId}`

  await api.post(url)
}

export async function removeContainer(id: string, hostId: number): Promise<void> {
  let url = `${BASE_PATH}/${id}/remove?hostId=${hostId}`

  await api.post(url)
}
