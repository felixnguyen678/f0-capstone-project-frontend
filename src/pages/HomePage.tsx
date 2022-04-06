import { useStores } from '../hooks/useStores'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'

const HomePage = () => {
  const { testStore } = useStores()
  console.log({ testStore: testStore.status })

  return (
    <>
      <Header><h1 className='text-center'>Header</h1></Header>
      <Sidebar>
        <div className='d-flex flex-column justify-content-between h-100'>
          <div>
          <div className="d-flex py-3">
          <i className="ri-line-chart-line me-3 h2"></i> <h4 className='pt-1'>Monitoring</h4>
        </div>
        <div className="d-flex py-3">
          <i className="ri-server-line me-3 h2"></i> <h4 className='pt-1'>Droplets</h4>
        </div>
        <div className="d-flex py-3">
          <i className="ri-code-box-line me-3 h2"></i> <h4 className='pt-1'>Containers</h4>
        </div>
        <div className="d-flex py-3">
          <i className="ri-bill-line me-3 h2"></i> <h4 className='pt-1'>Billing</h4>
        </div>
        <div className="d-flex py-3">
          <i className="ri-group-line me-3 h2"></i> <h4 className='pt-1'>Accounts</h4>
        </div>
          </div>
        <div>
        <div className="d-flex py-3 border-top border-2">
          <i className="ri-login-box-line me-3 h2"></i> <h4 className='pt-1'>Logout</h4>
        </div>
        </div>
        </div>
      </Sidebar>
    </>
  )
}

export default HomePage
