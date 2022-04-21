import ContainerContent from '../../components/pages/ContainerPage/component/ContainerContent'
import withAuthen from '../../hocs/withAuthen'

const ContainersPage = () => {
  return (
    <>
      <ContainerContent />
    </>
  )
}

export default withAuthen(ContainersPage)
