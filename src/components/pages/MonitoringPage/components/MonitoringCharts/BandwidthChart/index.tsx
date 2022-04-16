import { Chart, registerables } from 'chart.js'
import { observer } from 'mobx-react'
import { Line } from 'react-chartjs-2'
import { useStores } from '../../../../../../hooks/useStores'
import styles from './styles.module.scss'
import { generateChartData } from './utils'

Chart.register(...registerables)

const BandwidthChart = () => {
  const { bandwidthStore } = useStores()

  const chartData = generateChartData(bandwidthStore)

  return (
    <Line
      data={chartData}
      options={{
        elements: {
          line: {
            fill: true
          }
        },
        responsive: true,
        scales: {
          y: {
            ticks: {
              callback: function (value) {
                return value + 'MB/s'
              }
            }
          },
          x: {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 8
            }
          }
        }
      }}
      className={styles.chart}
    />
  )
}

export default observer(BandwidthChart)
