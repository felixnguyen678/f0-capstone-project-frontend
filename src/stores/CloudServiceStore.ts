import first from 'lodash/first'
import { action, makeObservable, observable } from 'mobx'
import { getDroplets } from '../API/digitalOcean/droplet'
import { ECloudService } from '../constants/enums/cloudService'
import { IDroplet } from '../types/digitalOcean/droplet'
import { RootStore } from '.'

export default class CloudServiceStore {
  rootStore: RootStore
  currentCloudService: ECloudService | null = null
  currentDroplet: IDroplet | undefined

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      currentCloudService: observable,
      currentDroplet: observable,
      setCurrentCloudService: action,
      removeCloudService: action,
      fetchCurrentDroplet: action
    })

    this.rootStore = rootStore
  }

  setCurrentCloudService(cloudService: ECloudService): void {
    this.currentCloudService = cloudService
  }

  removeCloudService(): void {
    this.currentCloudService = null
  }

  public async fetchCurrentDroplet(): Promise<void> {
    const droplets = await getDroplets()

    // INFO: We will get default droplet by the first droplets in the list and when we scale up, we need to fix this
    const droplet = first(droplets)
    this.currentDroplet = droplet
  }
}
