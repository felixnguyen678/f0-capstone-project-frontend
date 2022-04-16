import { AxiosResponse } from 'axios'
import api from '..'
import {
  EBandwidthNetworkInterface,
  EBandwidthTrafficDirection,
  IMonitoringResponse
} from '../../types/digitalOcean/monitoring'

const BASE_PATH = '/do-api/monitoring'

export async function getMonitoringBandwidth(
  hostId: string,
  start: Date,
  end: Date,
  netWorkInterface: EBandwidthNetworkInterface,
  trafficDirection: EBandwidthTrafficDirection
): Promise<IMonitoringResponse> {
  const stringStartDate = start.toISOString()
  const stringEndDate = end.toISOString()

  const response: AxiosResponse = await api.get(
    `${BASE_PATH}/metrics/bandwidth?hostId=${hostId}&start=${stringStartDate}&end=${stringEndDate}&networkInterface=${netWorkInterface}&trafficDirection=${trafficDirection}`
  )

  return response?.data
}

export async function getMonitoringMemory(hostId: string, start: Date, end: Date): Promise<IMonitoringResponse> {
  const stringStartDate = start.toISOString()
  const stringEndDate = end.toISOString()

  const response: AxiosResponse = await api.get(
    `${BASE_PATH}/metrics/memory?hostId=${hostId}&start=${stringStartDate}&end=${stringEndDate}`
  )

  return response?.data
}

export async function getMonitoringUsedCPU(hostId: string, start: Date, end: Date): Promise<IMonitoringResponse> {
  const stringStartDate = start.toISOString()
  const stringEndDate = end.toISOString()

  const response: AxiosResponse = await api.get(
    `${BASE_PATH}/metrics/cpu?hostId=${hostId}&start=${stringStartDate}&end=${stringEndDate}`
  )

  return response?.data
}
