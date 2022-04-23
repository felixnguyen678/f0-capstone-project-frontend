import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../../../components/LoadingSpinner'
import ContainerDetailCard from '../../../components/pages/ContainerDetailsPage/components/ContainerDetailCard'
import TopContainer from '../../../components/pages/ContainerDetailsPage/components/TopContainer'
import styles from '../../../components/pages/ContainerDetailsPage/styles.module.scss'
import withAuthen from '../../../hocs/withAuthen'
import { useStores } from '../../../hooks/useStores'
import { IContainer } from '../../../types/digitalOcean/container'

const MOCKUP_CONTAINER: IContainer = {
  id: 'abc',
  image: 'f0/backend',
  names: 'backend',
  ports: '3000/3000',
  createdAt: new Date(),
  status: 'Up 2 days',
  stats: {
    cpuPercent: '0.00%',
    memoryInfo: {
      usage: '678.9MiB / 2GB',
      usagePercent: '31%'
    },
    netIO: '299kB /9.28MB',
    blockIO: '85Mb/ 2B'
  }
}

const ContainerDetailPage = () => {
  const { id } = useParams()
  const { containerStore, cloudServiceStore } = useStores()
  const { container } = containerStore

  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function fetchContainer(): Promise<void> {
    setIsLoading(true)
    if (id) {
      await containerStore.fetchContainer(id)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (cloudServiceStore.currentDroplet) {
      fetchContainer()
    }
  }, [cloudServiceStore.currentDroplet])

  return (
    <>
      <div className={styles.container}>
        {isLoading && <LoadingSpinner />}
        {container && (
          <>
            <TopContainer container={container!} />
            <ContainerDetailCard stats={container!.stats} />
          </>
        )}
      </div>
    </>
  )
}

export default withAuthen(observer(ContainerDetailPage))
