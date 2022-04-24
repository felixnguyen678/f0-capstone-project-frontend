import { action, makeObservable, observable } from 'mobx'
import {
  getContainer,
  getContainers,
  removeContainer,
  restartContainer,
  startContainer,
  stopContainer
} from '../../API/digitalOcean/container'
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

      fetchContainers: action,
      fetchContainer: action,
      startContainer: action,
      restartContainer: action,
      stopContainer: action,
      removeContainer: action,
      clear: action
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

  public async startContainer(id: string): Promise<void> {
    const currentDroplet = this.rootStore.cloudServiceStore.currentDroplet

    if (!currentDroplet) {
      return
    }

    await startContainer(id, currentDroplet.id)
  }

  public async restartContainer(id: string): Promise<void> {
    const currentDroplet = this.rootStore.cloudServiceStore.currentDroplet

    if (!currentDroplet) {
      return
    }

    await restartContainer(id, currentDroplet.id)
  }

  public async stopContainer(id: string): Promise<void> {
    const currentDroplet = this.rootStore.cloudServiceStore.currentDroplet

    if (!currentDroplet) {
      return
    }

    await stopContainer(id, currentDroplet.id)
  }

  public async removeContainer(id: string): Promise<void> {
    const currentDroplet = this.rootStore.cloudServiceStore.currentDroplet

    if (!currentDroplet) {
      return
    }

    await removeContainer(id, currentDroplet.id)
  }

  public clear(): void {
    this.containers = []
    this.container = undefined
  }
}
