import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../../../components/LoadingSpinner'
import ContainerDetailCard from '../../../components/pages/ContainerDetailsPage/components/ContainerDetailCard'
import TopContainer from '../../../components/pages/ContainerDetailsPage/components/TopContainer'
import styles from '../../../components/pages/ContainerDetailsPage/styles.module.scss'
import withAuthen from '../../../hocs/withAuthen'
import { useStores } from '../../../hooks/useStores'

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

  useEffect(() => {
    return () => {
      containerStore.clear()
    }
  }, [])

  return (
    <>
      <div className={styles.container}>
        {isLoading && <LoadingSpinner />}
        {container && !isLoading && (
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
