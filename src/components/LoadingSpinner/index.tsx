import { Spinner } from 'reactstrap'
import styles from './styles.module.scss'

const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <Spinner animation="border" />
      <span>Loading</span>
    </div>
  )
}

export default LoadingSpinner
