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
        <div className={styles.header}>
          <Link to={routes.home.value} className={styles.title}>
            <h1>FzeroCloud</h1>
          </Link>
          <div className={styles.rightColumn}>
            <div className={styles.item}>
              <i className="ri-cloud-line"></i>
              <h4 className="">Digital Ocean</h4>
            </div>
            <div className={styles.item}>
              <i className="ri-user-line"></i>
              <h4 className="">{currentUser?.email}</h4>
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
