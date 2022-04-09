import { makeObservable, observable } from 'mobx'
import { toast } from 'react-toastify'
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

  async getMyUser(): Promise<void> {
    const currentUser = await getMyProfile()
    this.user = currentUser
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
        toast.error('Something may wrong, please login again !')
        window.location.replace('/login')
      }
    } catch (error) {
      toast.error('Something may wrong, please try again !')
      window.location.replace('/login')
    }
  }

  async login(data: ILoginRequest): Promise<void> {
    try {
      const { token } = await login(data)
      this.setAccessToken(token)
      await this.getMyUser()
    } catch (error: any) {
      //*INFO: Catch clause variable type annotation must be 'any' or 'unknown' if specified
      toast.error('Something may wrong, please try again !')
    }
  }

  status: boolean = true
}
