import { ChartData } from 'chart.js'
import MonitoringCPUStore from '../../../../../../stores/monitoring/cpuStore'
import { formatXValuesDate } from '../../../../../../utils/chart'

export function generateChartData(cpuStore: MonitoringCPUStore): ChartData<'line', number[], string> {
  // INFO: get default labels with one in four of the labels
  const xValues = cpuStore?.usedCPUData?.xValues ?? []
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
      data: cpuStore?.usedCPUData?.yValues ?? [],
      ...datasetsConfig
    }
  ]

  return {
    labels,
    datasets
  }
}
