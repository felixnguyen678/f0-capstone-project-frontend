export interface IContainer {
  id: string
  image: string
  names: string
  ports: string
  createdAt: Date
  status: string
  stats: IContainerStats
}

export interface IContainerStats {
  cpuPercent: string
  memoryInfo: IContainerMemoryInfo
  netIO: string
  blockIO: string
}

export interface IContainerMemoryInfo {
  usage: string
  usagePercent: string
}
