import routes from '../../routes'
import Header from './../Header'
import Sidebar from './../Sidebar'
import style from './styles.module.scss'

const AuthenticatedLayout = ({ ...props }) => {
  return (
    <>
      <Header>
        <div className="d-flex justify-content-between">
          <a href={routes.home.value} className={style.title}>
            <h1 className="text-center">FzeroCloud</h1>
          </a>
          <a className="d-flex py-2" href={routes.myProfile.value}>
            <i className="ri-user-line me-2 h2"></i>
            <h4 className="pt-1">user1</h4>
          </a>
        </div>
      </Header>
      <div className="d-flex">
        <Sidebar>
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              <a className="d-flex py-3 text-secondary" href={routes.home.value}>
                <i className="ri-line-chart-line me-3 h2"></i> <h4 className="pt-1">Monitoring</h4>
              </a>
              <a className="d-flex py-3" href={routes.billing.value}>
                <i className="ri-bill-line me-3 h2"></i> <h4 className="pt-1">Billing</h4>
              </a>
              <a className="d-flex py-3" href={routes.resourceAlerts.value}>
                <i className="ri-alarm-warning-line me-3 h2"></i> <h4 className="pt-1">Resource Alerts</h4>
              </a>
              <a className="d-flex py-3" href={routes.virtualPrivateServers.value}>
                <i className="ri-server-line me-3 h2"></i> <h4 className="pt-1">VPSs</h4>
              </a>
              <a className="d-flex py-3" href={routes.containers.value}>
                <i className="ri-code-box-line me-3 h2"></i> <h4 className="pt-1">Containers</h4>
              </a>

              <a className="d-flex py-3" href={routes.users.value}>
                <i className="ri-group-line me-3 h2"></i> <h4 className="pt-1">Users</h4>
              </a>
            </div>
            <div>
              <a className="d-flex py-3 border-top border-2" href={routes.login.value}>
                <i className="ri-login-box-line me-3 h2"></i> <h4 className="pt-1">Logout</h4>
              </a>
            </div>
          </div>
        </Sidebar>
        <div className={style.main}>{props.children}</div>
      </div>
    </>
  )
}

export default AuthenticatedLayout
