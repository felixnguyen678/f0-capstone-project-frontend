import { action, makeObservable, observable } from 'mobx'
import { getContainers } from '../../API/digitalOcean/container'
import { IContainer } from '../../types/digitalOcean/container'
import { RootStore } from '../index'

export default class ContainerStore {
  rootStore: RootStore
  containers: IContainer[] = []

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      containers: observable,
      fetchContainers: action
    })

    this.rootStore = rootStore
  }

  public async fetchContainers(keyword?: string): Promise<void> {
    const currentDroplet = this.rootStore.cloudServiceStore.currentDroplet

    if (!currentDroplet) {
      return
    }
    const containers = await getContainers(currentDroplet.id, keyword)

    this.containers = containers
  }
}
