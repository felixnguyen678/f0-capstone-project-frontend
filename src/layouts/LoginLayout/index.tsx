import Header from '../components/Header'
import styles from './styles.module.scss'

export const LoginLayout = ({ ...props }) => {
  return (
    <>
      <Header>
        <h1 className="text-center">FzeroCloud</h1>
      </Header>
      <div className={styles.main}>{props.children}</div>
    </>
  )
}

export default LoginLayout
