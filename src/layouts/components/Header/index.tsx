import styles from './styles.module.scss'

const Header = ({ ...props }) => {
  return <div className={`${styles.header} position-sticker`}>{props.children}</div>
}

export default Header
