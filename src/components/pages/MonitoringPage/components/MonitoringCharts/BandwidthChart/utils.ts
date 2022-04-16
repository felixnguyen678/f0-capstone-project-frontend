import { ChartData } from 'chart.js'
import MonitoringBandwidthStore from '../../../../../../stores/monitoring/bandwidthStore'
import { formatXValuesDate } from '../../../../../../utils/chart'

export function generateChartData(bandwidthStore: MonitoringBandwidthStore): ChartData<'line', number[], string> {
  // INFO: get default labels with one in four of the labels
  const xValues = bandwidthStore?.publicInboundData?.xValues ?? []
  const labels = formatXValuesDate(xValues)

  const datasetsConfig = {
    fill: true,
    pointRadius: 0,
    lineTension: 0,
    hidden: true
  }

  const datasets = [
    {
      label: 'public - inbound',
      backgroundColor: 'rgba(255, 109, 143, 0.1)',
      borderColor: 'rgb(255, 99, 132)',
      data: bandwidthStore?.publicInboundData?.yValues ?? [],
      ...datasetsConfig,
      hidden: false
    },
    {
      label: 'public - outbound',
      backgroundColor: 'rgba(247, 219, 206, 0.2)',
      borderColor: 'rgb(219, 97, 35)',
      data: bandwidthStore?.publicOutboundData?.yValues ?? [],
      ...datasetsConfig
    },
    {
      label: 'private - inbound',
      backgroundColor: 'rgba(216, 219, 35, 0.5)',
      borderColor: 'rgb(216, 219, 35)',
      data: bandwidthStore?.privateInboundData?.yValues ?? [],
      ...datasetsConfig
    },
    {
      label: 'private - outbound',
      backgroundColor: 'rgba(165, 236, 237, 0.5)',
      borderColor: 'rgb(35, 216, 219)',
      data: bandwidthStore?.privateOutboundData?.yValues ?? [],
      ...datasetsConfig
    }
  ]

  return {
    labels,
    datasets
  }
}
