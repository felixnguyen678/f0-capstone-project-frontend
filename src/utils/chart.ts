import dayjs from 'dayjs'

export function formatXValuesDate(xValues: string[]): string[] {
  return Array.isArray(xValues)
    ? xValues.map((xValue) => {
        const formatDate = dayjs(xValue).format('MM/DD HH:mm')
        return formatDate
      })
    : []
}
