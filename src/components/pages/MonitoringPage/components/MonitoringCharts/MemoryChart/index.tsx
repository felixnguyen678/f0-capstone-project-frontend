import { Chart, registerables } from 'chart.js'
import { round } from 'lodash'
import { observer } from 'mobx-react'
import { Line } from 'react-chartjs-2'
import { useStores } from '../../../../../../hooks/useStores'
import styles from './styles.module.scss'
import { generateChartData } from './utils'

Chart.register(...registerables)

const MemoryChart = () => {
  const { memoryStore } = useStores()

  const chartData = generateChartData(memoryStore)

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
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            ticks: {
              callback: function (value) {
                const roundedValue = round(Number(value) * 100, 2)
                return `${roundedValue}%`
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

export default observer(MemoryChart)
