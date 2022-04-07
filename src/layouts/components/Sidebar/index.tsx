import styles from './styles.module.scss'

const Sidebar = ({ ...props }) => {
  return <div className={styles.sidebar}>{props.children}</div>
}

export default Sidebar
