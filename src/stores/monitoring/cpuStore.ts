import get from 'lodash/get'
import { action, makeObservable, observable } from 'mobx'
import { getMonitoringUsedCPU } from '../../API/digitalOcean/monitoring'
import { IMonitoringResponse } from '../../types/digitalOcean/monitoring'
import { RootStore } from '../index'

class MonitoringCPUStore {
  rootStore: RootStore

  usedCPUData: IMonitoringResponse | undefined

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      usedCPUData: observable,
      fetchMonitoringUsedCPU: action
    })

    this.rootStore = rootStore
  }

  public async fetchMonitoringUsedCPU(start: Date, end: Date): Promise<void> {
    const { cloudServiceStore } = this.rootStore

    const dropletId = get(cloudServiceStore.currentDroplet, 'id')

    if (!dropletId) {
      return
    }

    const cpuResponse = await getMonitoringUsedCPU(`${dropletId}`, start, end)

    this.usedCPUData = cpuResponse
  }
}

export default MonitoringCPUStore
