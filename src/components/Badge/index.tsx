import classnames from 'classnames'
import { BadgeProps } from 'reactstrap'
import styles from './styles.module.scss'

export const CustomBadge = ({ ...otherProps }: BadgeProps) => {
  const { children } = otherProps
  return (
    <span {...otherProps} className={classnames(otherProps.className, styles.coreBadge)}>
      {children}
    </span>
  )
}

export default CustomBadge
