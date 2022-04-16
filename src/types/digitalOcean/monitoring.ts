export interface IMonitoringResponse {
  xValues: string[]
  yValues: number[]
}

export enum EBandwidthNetworkInterface {
  PUBLIC = 'public',
  PRIVATE = 'private'
}

export enum EBandwidthTrafficDirection {
  INBOUND = 'inbound',
  OUTBOUND = 'outbound'
}
