import { Badge } from 'reactstrap'
import styles from './styles.module.scss'

interface IStatus {
  status: string
}

const ContainerState = (props: IStatus) => {
  const { status } = props
  let color = ''
  switch (status) {
    case 'Running':
      color = 'success'
      break
    case 'Paused':
      color = 'secondary'
      break
    case 'Exited':
      color = 'danger'
      break
    case 'Created':
      color = 'info'
      break
    case 'Restarting':
      color = 'warning'
      break
    case 'Dead':
      color = 'dark'
      break
  }

  return (
    <div>
      <Badge className={styles.badge} color={color}>
        {status}
      </Badge>
    </div>
  )
}

export default ContainerState
