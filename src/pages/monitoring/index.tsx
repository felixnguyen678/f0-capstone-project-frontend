import MonitoringContent from '../../components/pages/MonitoringPage/components/TabsContent'
import withAuthen from '../../hocs/withAuthen'

const MonitoringPage = () => {
  return (
    <>
      <MonitoringContent />
    </>
  )
}

export default withAuthen(MonitoringPage)
