import { IOptionItem } from '../../../../../types/select'

export const TIME_VALUES = {
  '1h': '1h',
  '6h': '6h',
  '24h': '24h',
  '7d': '7d',
  '14d': '14d'
}

export const PERIOD_OPTIONS: IOptionItem[] = [
  {
    label: '1 hours',
    value: TIME_VALUES['1h']
  },
  {
    label: '6 hours',
    value: TIME_VALUES['6h']
  },
  {
    label: '24 hours',
    value: TIME_VALUES['24h']
  },
  {
    label: '7 days',
    value: TIME_VALUES['7d']
  },
  {
    label: '14 days',
    value: TIME_VALUES['14d']
  }
]
