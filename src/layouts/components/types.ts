import { ReactNode } from 'react'

export interface IMenuItem {
  title: string
  href: string
  icon: ReactNode
  handleOnClick?: () => void
}
