import { Col } from 'reactstrap'
import { EContainerDetail } from '../../../../../constants/enums/container'
import styles from './styles.module.scss'

interface IContainerDetailCellProps {
  title: EContainerDetail
  value: string
}

const ContainerDetailCell = (props: IContainerDetailCellProps) => {
  const {title, value} = props
  return (
    <Col>
      <div className={styles.containerDetailCell}>
          <h1>{value}</h1>
          <h5>{title.toUpperCase()}</h5>
      </div>
    </Col>
  )
}

export default ContainerDetailCell