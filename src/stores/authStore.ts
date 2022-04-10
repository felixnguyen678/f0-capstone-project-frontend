import { action, makeObservable, observable } from 'mobx'
import { getMyProfile, login } from '../API/authenticate'
import { ELocalStorageKeys } from '../constants/enums/localStorage'
import { ILoginRequest } from '../types/authenticate'
import { IUser } from './../types/user'
import { RootStore } from './index'

export default class AuthStore {
  rootStore: RootStore
  currentUser: IUser | null = null

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      currentUser: observable,
      getAccessToken: action,
      getMyUser: action,
      setAccessToken: action,
      logout: action,
      login: action
    })

    this.rootStore = rootStore
  }

  async getMyUser(): Promise<IUser | null> {
    const currentUser = await getMyProfile()
    this.currentUser = currentUser
    return currentUser
  }

  setAccessToken(accessToken: string): void {
    const token = ELocalStorageKeys.ACCESS_TOKEN
    localStorage.setItem(token, accessToken)
  }

  logout(): void {
    const token = ELocalStorageKeys.ACCESS_TOKEN
    localStorage.removeItem(token)
    this.currentUser = null
  }

  async getAccessToken(): Promise<void> {
    const errorMessage = 'Cannot get access token, please try again'
    const token = ELocalStorageKeys.ACCESS_TOKEN
    const currentToken: string = localStorage.getItem(token) || ''
    try {
      if (!currentToken) {
        throw Error(errorMessage)
      }
      const currentUser = await getMyProfile()
      this.currentUser = currentUser
    } catch (error) {
      throw Error(errorMessage)
    }
  }

  async login(data: ILoginRequest): Promise<void> {
    const { token } = await login(data)
    this.setAccessToken(token)
    await this.getMyUser()
  }
}
