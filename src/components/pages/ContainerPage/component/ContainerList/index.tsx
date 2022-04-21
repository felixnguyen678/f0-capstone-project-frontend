import { Card } from 'reactstrap'
import ContainerState from '../containerState/'
import { containerData } from './containerData'
import styles from './styles.module.scss'

const ContainerList = () => {
  return (
    <div className={styles.containerWrapper}>
      {Array.isArray(containerData) &&
        containerData.map((containerInfo, index) => {
          const { containerName, imageName, status, port } = containerInfo
          return (
            <Card body className={styles.cardContainer} key={index} onClick={() => console.log(index)}>
              <h5>{containerName}</h5>
              <h5>{imageName}</h5>
              <ContainerState status={status} />
              <h5>{port}</h5>
            </Card>
          )
        })}
    </div>
  )
}

export default ContainerList
