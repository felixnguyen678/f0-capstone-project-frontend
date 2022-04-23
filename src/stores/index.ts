import AuthStore from './authStore'
import CloudServiceStore from './cloudServiceStore'
import ContainerStore from './digital-ocean/containerStore'
import DOAuthStore from './doAuthStore'
import BandwidthStore from './monitoring/bandwidthStore'
import CPUStore from './monitoring/cpuStore'
import MemoryStore from './monitoring/memoryStore'
import TestStore from './testStore'

export class RootStore {
  testStore: TestStore
  authStore: AuthStore
  doAuthStore: DOAuthStore
  cloudServiceStore: CloudServiceStore
  bandwidthStore: BandwidthStore
  memoryStore: MemoryStore
  cpuStore: CPUStore
  containerStore: ContainerStore

  constructor() {
    this.testStore = new TestStore(this)
    this.authStore = new AuthStore(this)
    this.doAuthStore = new DOAuthStore(this)
    this.cloudServiceStore = new CloudServiceStore(this)
    this.bandwidthStore = new BandwidthStore(this)
    this.memoryStore = new MemoryStore(this)
    this.cpuStore = new CPUStore(this)
    this.containerStore = new ContainerStore(this)
  }
}

export const rootStore = new RootStore()
