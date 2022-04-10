import { makeObservable, observable, action } from 'mobx'
import { ECloudService } from './../constants/enums/cloudService'
import { RootStore } from '.'

export default class CloudServiceStore {
  rootStore: RootStore
  currentCloudService: ECloudService | null = null

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      currentCloudService: observable,
      setCurrentCloudService: action,
      removeCloudService: action
    })

    this.rootStore = rootStore
  }

  setCurrentCloudService(cloudService: ECloudService): void {
    this.currentCloudService = cloudService
  }

  removeCloudService(): void {
    this.currentCloudService = null
  }
}
