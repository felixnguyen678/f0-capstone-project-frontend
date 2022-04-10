import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { useStores } from '../../hooks/useStores'
import routes from '../../routes'
import Header from '../components/Header'
import MenuItem from '../components/MenuItem'
import Sidebar from '../components/Sidebar'
import MENU_ITEM_DATA from './constants'
import styles from './styles.module.scss'

const AuthenticatedLayout = ({ ...props }) => {
  const { authStore } = useStores()
  const { currentUser } = authStore
  return (
    <>
      <Header>
        <div className="d-flex justify-content-between">
          <Link to={routes.home.value} className={styles.title}>
            <h1 className="text-center">FzeroCloud</h1>
          </Link>
          <span className="d-flex py-2">
            <i className="ri-user-line me-2 h2"></i>
            <h4 className="pt-1">{currentUser?.email}</h4>
          </span>
        </div>
      </Header>
      <div className="d-flex">
        <Sidebar>
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              {MENU_ITEM_DATA.map((item, index) => (
                <MenuItem item={item} key={index} />
              ))}
            </div>
            <div>
              <MenuItem
                item={{
                  title: 'Logout',
                  href: routes.login.value,
                  icon: <i className="ri-login-box-line"></i>,
                  handleOnClick: () => {
                    authStore.clearAccessToken()
                  }
                }}
              />
            </div>
          </div>
        </Sidebar>
        <div className={styles.main}>{props.children}</div>
      </div>
    </>
  )
}

export default observer(AuthenticatedLayout)
