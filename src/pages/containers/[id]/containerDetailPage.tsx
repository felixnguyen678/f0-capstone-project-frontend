import ButtonsGroup from '../../../components/pages/ContainersPage/ContainerDetailsPage/ButtonsGroup'
import ContainerDetailCard from '../../../components/pages/ContainersPage/ContainerDetailsPage/ContainerDetailCard'
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
  return (
    <>
      <ButtonsGroup />
      <ContainerDetailCard detail={MOCKUP_CONTAINER.stats}/>
    </>
  )
}

export default withAuthen(ContainerDetailPage)
