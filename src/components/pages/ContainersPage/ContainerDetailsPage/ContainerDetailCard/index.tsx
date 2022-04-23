import get from 'lodash/get'
import { Card, CardBody, Row } from 'reactstrap'
import { EContainerDetail } from '../../../../../constants/enums/container'
import { IContainerStats } from '../../../../../types/digitalOcean/container'
import ContainerDetailCell from '../ContainerDetailCell'
import styles from './styles.module.scss'

export interface IContainerDetailCardProps {
  detail: IContainerStats
}

const ContainerDetailCard = ({ detail }: IContainerDetailCardProps) => {
  const { cpuPercent, memoryInfo, netIO, blockIO } = detail
  const memoryUsage = get(memoryInfo, 'usage')

  return (
    <div className={styles.container}>
      <Card>
        <CardBody>
          <div className={styles.cardBody}>
            <div className={styles.verticalLine} />
            <div className={styles.horizontalLine}></div>
            <Row xs="2">
              <ContainerDetailCell title={EContainerDetail.CPU_USAGE} value={cpuPercent} />
              <ContainerDetailCell title={EContainerDetail.MEMORY_USAGE} value={memoryUsage} />
              <ContainerDetailCell title={EContainerDetail.DISK_READ_WRITE} value={blockIO} />
              <ContainerDetailCell title={EContainerDetail.NETWORK_IO} value={netIO} />
            </Row>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default ContainerDetailCard
