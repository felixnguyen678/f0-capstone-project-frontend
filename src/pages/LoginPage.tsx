import LoginForm from '../components/pages/LoginPage/components/LoginForm'
import styles from '../components/pages/LoginPage/styles.module.scss'
import LoginLayout from '../layouts/LoginLayout'

const LoginPage = () => {
  return (
    <LoginLayout>
      <div className={styles.container}>
        <LoginForm />
      </div>
    </LoginLayout>
  )
}

export default LoginPage
