import { ReactNode } from 'react'
import type { IconType } from 'react-icons'

export type Coin = {
  icon: IconType
  name: string
  variant: string
  size?: string
  isSolid?: boolean
}

export type Feature = {
  icon: ReactNode
  title: string
  description: string
}

export type Service = {
  icon: ReactNode
  variant: string
  title: string
  description: string
}
