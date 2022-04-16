import { ChartData } from 'chart.js'
import MonitoringMemoryStore from '../../../../../../stores/monitoring/memoryStore'
import { formatXValuesDate } from '../../../../../../utils/chart'

export function generateChartData(memoryStore: MonitoringMemoryStore): ChartData<'line', number[], string> {
  // INFO: get default labels with one in four of the labels
  const xValues = memoryStore?.memoryData?.xValues ?? []
  const labels = formatXValuesDate(xValues)

  const datasetsConfig = {
    fill: true,
    pointRadius: 0,
    lineTension: 0
  }

  const datasets = [
    {
      label: 'usage memory',
      backgroundColor: 'rgba(165, 236, 237, 0.5)',
      borderColor: 'rgb(35, 216, 219)',
      data: memoryStore?.memoryData?.yValues ?? [],
      ...datasetsConfig
    }
  ]

  return {
    labels,
    datasets
  }
}
