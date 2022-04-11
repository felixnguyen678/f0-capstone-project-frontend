import { action, makeObservable, observable } from 'mobx'
import { authenticateDO } from '../API/doAuthenticate'
import { ECloudService } from '../constants/enums/cloudService'
import { ELocalStorageKeys } from '../constants/enums/localStorage'
import { IDOAccount } from './../types/doAccount'
import { IDoAuthenticationRequest } from './../types/doAuthenticate'
import { RootStore } from './index'
export default class DOAuthStore {
  rootStore: RootStore
  doAccount: IDOAccount | null = null

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      doAccount: observable,
      getDOAccount: action,
      setDOToken: action,
      logoutDO: action,
      getDOToken: action,
      loginDO: action
    })

    this.rootStore = rootStore
  }

  async getDOAccount(): Promise<IDOAccount | null> {
    const cloudService = ECloudService.DIGITAL_OCEAN
    const { cloudServiceStore } = this.rootStore
    const doAccount = await authenticateDO()
    this.doAccount = doAccount
    cloudServiceStore.setCurrentCloudService(cloudService)
    return doAccount
  }

  setDOToken(doToken: string): void {
    const token = ELocalStorageKeys.DO_TOKEN
    localStorage.setItem(token, doToken)
  }

  logoutDO(): void {
    const token = ELocalStorageKeys.DO_TOKEN
    localStorage.removeItem(token)
    this.doAccount = null
  }

  async getDOToken(): Promise<void> {
    const errorMessage = 'Cannot get Digital Ocean token, please try again'
    const token = ELocalStorageKeys.DO_TOKEN
    const currentToken: string = localStorage.getItem(token) || ''
    try {
      if (!currentToken) {
        throw Error(errorMessage)
      }
      const doAccount = await this.getDOAccount()
      this.doAccount = doAccount
    } catch (error) {
      throw Error(errorMessage)
    }
  }

  async loginDO(data: IDoAuthenticationRequest): Promise<void> {
    const { token } = data
    this.setDOToken(token)
    await this.getDOAccount()
  }
}
