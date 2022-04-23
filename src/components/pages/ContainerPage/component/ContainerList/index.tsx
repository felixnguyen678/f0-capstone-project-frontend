import dayjs from 'dayjs'
import { Table } from 'reactstrap'
import ContainerState from '../containerState/'
import { containerData } from './containerData'
import styles from './styles.module.scss'

const ContainerList = () => {
  return (
    <div className={styles.containerWrapper}>
      <Table responsive hover>
        <thead>
          <tr>
            <th>Container Name</th>
            <th>Image Name</th>
            <th>Status</th>
            <th>Port</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(containerData) &&
            containerData.map((containerInfo, index) => {
              const { containerName, imageName, status, port } = containerInfo
              return (
                <tr>
                  <td>{containerName}</td>
                  <td>{imageName}</td>
                  <td>
                    <ContainerState status={status} />
                  </td>
                  <td>{port}</td>
                  <td>{dayjs().format('DD.MM.YYYY')}</td>
                </tr>
              )
            })}
        </tbody>
      </Table>
    </div>
  )
}

export default ContainerList
