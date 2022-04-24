import { Spinner } from 'reactstrap'
import styles from './styles.module.scss'

interface ILoadingSpinnerProps {
  size?: string
}

const LoadingSpinner = (props: ILoadingSpinnerProps) => {
  const { size } = props

  return (
    <div className={styles.container}>
      <Spinner animation="border" size={size} />
      <span>Loading</span>
    </div>
  )
}

export default LoadingSpinner
