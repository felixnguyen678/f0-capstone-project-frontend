import { makeObservable, observable } from 'mobx'
import { getMyProfile, login } from '../API/authenticate'
import { ELocalStorageKeys } from '../constants/enums'
import { ILoginRequest } from '../types/authenticate'
import { IUser } from './../types/user/index'
import { RootStore } from './index'

export default class AuthStore {
  rootStore: RootStore
  token: string = ''
  user: IUser | null = null

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      status: observable
    })

    this.rootStore = rootStore
  }

  async getMyUser(): Promise<IUser> {
    const currentUser = await getMyProfile()
    this.user = currentUser
    return this.user
  }

  setAccessToken(accessToken: string): void {
    const token = ELocalStorageKeys.ACCESS_TOKEN
    sessionStorage.setItem(token, accessToken)
    this.token = accessToken
  }

  clearAccessToken(): void {
    const token = ELocalStorageKeys.ACCESS_TOKEN
    sessionStorage.removeItem(token)
    this.token = ''
    this.user = null
  }

  async getAccessToken(): Promise<void> {
    const token = ELocalStorageKeys.ACCESS_TOKEN
    const currentToken: string = localStorage.getItem(token) || ''
    this.token = currentToken
    try {
      if (currentToken) {
        const currentUser = await getMyProfile()
        this.user = currentUser
      } else {
        throw Error('Cannot get access token, please try again')
      }
    } catch (error) {
      throw Error('Cannot get access token, please try again')
    }
  }

  async login(data: ILoginRequest): Promise<void> {
    try {
      const { token } = await login(data)
      this.setAccessToken(token)
      await this.getMyUser()
    } catch (error: any) {
      throw Error('Invalid username or password, please try again')
    }
  }

  status: boolean = true
}
