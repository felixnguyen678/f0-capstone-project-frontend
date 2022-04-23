import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useStores } from '../../../../../hooks/useStores'
import ContainerList from '../ContainerList'
import SearchBar from '../SearchBar'
import styles from './styles.module.scss'

const ContainerContent = () => {
  const { containerStore, cloudServiceStore } = useStores()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function fetchContainers(keyword?: string): Promise<void> {
    setIsLoading(true)
    await containerStore.fetchContainers(keyword)
    setIsLoading(false)
  }

  useEffect(() => {
    if (cloudServiceStore.currentDroplet) {
      fetchContainers()
    }
  }, [cloudServiceStore.currentDroplet])

  return (
    <div className={styles.wrapper}>
      <h2>Containers</h2>

      <SearchBar fetchContainers={fetchContainers} isLoading={isLoading} />
      <ContainerList isLoading={isLoading} />
    </div>
  )
}

export default observer(ContainerContent)
