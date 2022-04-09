import { EUserRole } from '../constants/enums/user'

export interface IUser {
  id: string
  email: string
  password: string
  phoneNumber: string
  name: string
  role: EUserRole
  isEmailConfirmed: boolean
  isActive: boolean
  isDeleted: boolean
  createdAt?: Date
  updatedAt?: Date
}
