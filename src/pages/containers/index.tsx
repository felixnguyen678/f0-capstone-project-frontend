import ContainerContent from '../../components/pages/ContainerPage/components/ContainerContent'
import withAuthen from '../../hocs/withAuthen'

const ContainersPage = () => {
  return (
    <>
      <ContainerContent />
    </>
  )
}

export default withAuthen(ContainersPage)
