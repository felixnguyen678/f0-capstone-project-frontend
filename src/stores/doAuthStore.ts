import { action, makeObservable, observable } from 'mobx'
import { authenticateDo } from '../API/doAuthenticate'
import { ECloudService } from '../constants/enums/cloudService'
import { ELocalStorageKeys } from '../constants/enums/localStorage'
import { IDoAccount } from './../types/doAccount'
import { IDoAuthenticationRequest } from './../types/doAuthenticate'
import { RootStore } from './index'
export default class DoAuthStore {
  rootStore: RootStore
  doAccount: IDoAccount | null = null

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      doAccount: observable,
      getDoAccount: action,
      setDoToken: action,
      logoutDo: action,
      getDoToken: action,
      loginDo: action
    })

    this.rootStore = rootStore
  }

  async getDoAccount(): Promise<IDoAccount | null> {
    const cloudService = ECloudService.DIGITAL_OCEAN
    const { cloudServiceStore } = this.rootStore
    const doAccount = await authenticateDo()
    this.doAccount = doAccount
    cloudServiceStore.setCurrentCloudService(cloudService)
    return doAccount
  }

  setDoToken(doToken: string): void {
    const token = ELocalStorageKeys.DO_TOKEN
    localStorage.setItem(token, doToken)
  }

  logoutDo(): void {
    const token = ELocalStorageKeys.DO_TOKEN
    localStorage.removeItem(token)
    this.doAccount = null
  }

  async getDoToken(): Promise<void> {
    const errorMessage = 'Cannot get Digital Ocean token, please try again'
    const token = ELocalStorageKeys.DO_TOKEN
    const currentToken: string = localStorage.getItem(token) || ''
    try {
      if (!currentToken) {
        throw Error(errorMessage)
      }
      const doAccount = await this.getDoAccount()
      this.doAccount = doAccount
    } catch (error) {
      throw Error(errorMessage)
    }
  }

  async loginDo(data: IDoAuthenticationRequest): Promise<void> {
    const { token } = data
    this.setDoToken(token)
    await this.getDoAccount()
  }
}
