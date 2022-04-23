import ContainerDetailCard from '../../../components/pages/ContainersPage/ContainerDetailsPage/ContainerDetailCard'
import TopContainer from '../../../components/pages/ContainersPage/ContainerDetailsPage/TopContainer'
import styles from '../../../components/pages/ContainersPage/styles.module.scss'
import withAuthen from '../../../hocs/withAuthen'
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
  const { names, image, status, stats } = MOCKUP_CONTAINER
  return (
    <>
      <div className={styles.container}>
        <TopContainer {...MOCKUP_CONTAINER} />
        <ContainerDetailCard detail={stats} />
      </div>
    </>
  )
}

export default withAuthen(ContainerDetailPage)
