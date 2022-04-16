import dayjs from 'dayjs'
import { TIME_VALUES } from '../components/pages/MonitoringPage/components/PeriodSelect/constants'

export function getDateRange(timeValue: string): {
  start: Date
  end: Date
} {
  const nowDate = dayjs()
  const result = {
    start: nowDate.toDate(),
    end: nowDate.toDate()
  }

  switch (timeValue) {
    case TIME_VALUES['1h']:
      result.start = nowDate.subtract(1, 'hours').toDate()
      break
    case TIME_VALUES['6h']:
      result.start = nowDate.subtract(6, 'hours').toDate()
      break
    case TIME_VALUES['24h']:
      result.start = nowDate.subtract(24, 'hours').toDate()
      break
    case TIME_VALUES['7d']:
      result.start = nowDate.subtract(7, 'days').toDate()
      break
    case TIME_VALUES['14d']:
      result.start = nowDate.subtract(14, 'days').toDate()
      break
    default:
      break
  }

  return result
}
