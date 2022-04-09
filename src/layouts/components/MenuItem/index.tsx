import { NavLink } from 'react-router-dom'
import { IMenuItem } from '../types'
import styles from './styles.module.scss'

interface IMenuItemProps {
  item: IMenuItem
}
const MenuItem = (props: IMenuItemProps) => {
  const { title, href, icon, handleOnClick } = props.item
  return (
    <NavLink
      onClick={() => {
        handleOnClick && handleOnClick()
      }}
      style={({ isActive }) => {
        return {
          color: isActive ? 'blue' : ''
        }
      }}
      className={styles.menuItem}
      to={href}
    >
      <span className={styles.icon}>{icon}</span>
      <h4 className={styles.title}>{title}</h4>
    </NavLink>
  )
}

export default MenuItem
