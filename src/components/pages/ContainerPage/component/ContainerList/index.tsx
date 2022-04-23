import dayjs from 'dayjs'
import { useObserver } from 'mobx-react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'reactstrap'
import { useStores } from '../../../../../hooks/useStores'
import routes from '../../../../../routes'
import LoadingSpinner from '../../../../LoadingSpinner'
import styles from './styles.module.scss'

interface IContainerListProps {
  isLoading: boolean
}

const ContainerList = (props: IContainerListProps) => {
  const DATE_FORMAT = 'DD.MM.YYYY'
  const { isLoading } = props
  const { containerStore } = useStores()
  const navigate = useNavigate()

  return useObserver(() => {
    const { containers } = containerStore

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
            {isLoading && <LoadingSpinner size="sm" />}

            {!isLoading &&
              Array.isArray(containers) &&
              containers.map((container) => {
                const { id, image, names, ports, createdAt, status } = container

                return (
                  <tr
                    key={id}
                    onClick={() => {
                      navigate(routes.containers.details.value(id))
                    }}
                  >
                    <td>{names}</td>
                    <td>{image}</td>
                    <td>{status}</td>
                    <td>{ports}</td>
                    <td>{dayjs(createdAt).format(DATE_FORMAT)}</td>
                  </tr>
                )
              })}
          </tbody>
        </Table>
      </div>
    )
  })
}

export default ContainerList
