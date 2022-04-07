import LoginForm from '../components/pages/LoginPage/components/LoginForm'
import styles from '../components/pages/LoginPage/styles.module.scss'
import GuestLayout from '../layouts/GuestLayout'

const LoginPage = () => {
  return (
    <GuestLayout>
      <div className={styles.container}>
        <LoginForm />
      </div>
    </GuestLayout>
  )
}

export default LoginPage
