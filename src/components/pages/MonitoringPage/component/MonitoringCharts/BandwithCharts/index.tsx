import { Chart, registerables } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { data } from './data'
import styles from './styles.module.scss'

Chart.register(...registerables)

const BandwidthChart = () => {
  return <Line data={data} className={styles.chart} />
}

export default BandwidthChart
