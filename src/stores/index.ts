import AuthStore from './authStore'
import CloudServiceStore from './CloudServiceStore'
import DoAuthStore from './doAuthStore'
import TestStore from './testStore'

export class RootStore {
  testStore: TestStore
  authStore: AuthStore
  doAuthStore: DoAuthStore
  cloudServiceStore: CloudServiceStore

  constructor() {
    this.testStore = new TestStore(this)
    this.authStore = new AuthStore(this)
    this.doAuthStore = new DoAuthStore(this)
    this.cloudServiceStore = new CloudServiceStore(this)
  }
}

export const rootStore = new RootStore()
