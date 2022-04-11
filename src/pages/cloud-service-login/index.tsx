import { useEffect } from 'react'
import { observer } from 'mobx-react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AuthenticationContent from '../../components/pages/AuthenticationPage/components/CloudLoginForm'
import { useStores } from '../../hooks/useStores'
import Header from '../../layouts/components/Header'
import routes from '../../routes'
import styles from './styles.module.scss'

const CloudServiceLoginPage = () => {
  const { authStore } = useStores()
  const navigate = useNavigate()
  const { currentUser } = authStore

  function handleCurrentUserNotFound(): void {
    navigate(routes.login.value)
    toast.error('Something may wrong, please login again ')
  }

  async function getMyUser(): Promise<void> {
    try {
      const myUser = await authStore.getMyUser()
      if (!myUser) {
        handleCurrentUserNotFound()
      }
    } catch (error) {
      handleCurrentUserNotFound()
    }
  }

  useEffect(() => {
    getMyUser()
  }, [])

  return (
    <div>
      <Header>
        <div className={styles.header}>
          <Link to={routes.home.value} className={styles.title}>
            <h1>FzeroCloud</h1>
          </Link>
          <div className={styles.rightColumn}>
            <div className={styles.item}>
              <i className={`ri-user-line ${styles.itemIcon}`}></i>
              <h4 className={styles.itemTitle}>{currentUser?.email}</h4>
            </div>
            <Link
              to={routes.login.value}
              onClick={() => {
                authStore.logout()
              }}
            >
              <div className={styles.item}>
                <i className={`ri-login-box-line ${styles.itemIcon}`}></i>
                <h4 className={styles.itemTitle}>Logout</h4>
              </div>
            </Link>
          </div>
        </div>
      </Header>
      <div className={styles.main}>
        <AuthenticationContent />
      </div>
    </div>
  )
}

export default observer(CloudServiceLoginPage)
