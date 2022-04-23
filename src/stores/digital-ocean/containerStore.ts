import { action, makeObservable, observable } from 'mobx'
import { getContainer, getContainers } from '../../API/digitalOcean/container'
import { IContainer } from '../../types/digitalOcean/container'
import { RootStore } from '../index'

export default class ContainerStore {
  rootStore: RootStore
  containers: IContainer[] = []
  container: IContainer | undefined

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      containers: observable,
      container: observable,
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

  public async fetchContainer(id: string): Promise<void> {
    const currentDroplet = this.rootStore.cloudServiceStore.currentDroplet

    if (!currentDroplet) {
      return
    }
    const container = await getContainer(id, currentDroplet.id)

    this.container = container
  }

  public clear(): void {
    this.containers = []
    this.container = undefined
  }
}
