import get from 'lodash/get'
import { action, makeObservable, observable } from 'mobx'
import { getMonitoringMemory } from '../../API/digitalOcean/monitoring'
import { IMonitoringResponse } from '../../types/digitalOcean/monitoring'
import { RootStore } from '../index'

class MonitoringMemoryStore {
  rootStore: RootStore

  memoryData: IMonitoringResponse | undefined

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      memoryData: observable,
      fetchMonitoringMemory: action
    })

    this.rootStore = rootStore
  }

  public async fetchMonitoringMemory(start: Date, end: Date): Promise<void> {
    const { cloudServiceStore } = this.rootStore

    const dropletId = get(cloudServiceStore.currentDroplet, 'id')

    if (!dropletId) {
      return
    }

    const memoryResponse = await getMonitoringMemory(`${dropletId}`, start, end)

    this.memoryData = memoryResponse
  }
}

export default MonitoringMemoryStore
