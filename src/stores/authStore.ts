import { makeAutoObservable } from 'mobx'
import { IUser } from '../types/user'
import { RootStore } from '.'

export default class AuthStore {
  rootStore: RootStore
  token: string = ''
  user: IUser = {}
  isLoading: boolean = false

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }
}
