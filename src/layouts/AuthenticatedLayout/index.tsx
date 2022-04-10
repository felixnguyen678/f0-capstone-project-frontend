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
  const { authStore, doAuthStore, cloudServiceStore } = useStores()
  const { currentUser } = authStore
  const {currentCloudService} = cloudServiceStore

  return (
    <>
      <Header>
        <div className={styles.header}>
          <Link to={routes.home.value} className={styles.title}>
            <h1>FzeroCloud</h1>
          </Link>
          <div className={styles.rightColumn}>
            <div className={styles.item}>
              <i className={`ri-cloud-line ${styles.itemIcon}`}></i>
              <h4 className={styles.itemTitle}>{currentCloudService}</h4>
            </div>
            <div className={styles.item}>
              <i className={`ri-user-line ${styles.itemIcon}`}></i>
              <h4 className={styles.itemTitle}>{currentUser?.email}</h4>
            </div>
          </div>
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
                  title: 'Logout Cloud Service',
                  href: routes.cloudServiceLogin.value,
                  icon: <i className="ri-logout-circle-r-line"></i>,
                  handleOnClick: () => {
                    doAuthStore.logoutDo()
                  }
                }}
              />
              <MenuItem
                item={{
                  title: 'Logout System',
                  href: routes.login.value,
                  icon: <i className="ri-login-box-line"></i>,
                  handleOnClick: () => {
                    authStore.logout()
                    doAuthStore.logoutDo()
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
