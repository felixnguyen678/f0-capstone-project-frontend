import classnames from 'classnames'
import { ButtonProps, Button, Spinner } from 'reactstrap'
import styles from './styles.module.scss'

interface Props extends ButtonProps {
  loading?: boolean
}

export const CoreButton = ({ loading, ...otherProps }: Props) => {
  const { children } = otherProps

  return (
    <Button
      {...otherProps}
      className={classnames(otherProps.className, styles.coreButton)}
      disabled={loading || otherProps.disabled}
    >
      {children}
      {loading && (
        <span className="pl-2">
          <Spinner className={styles.spinner} size="sm" color="light" />
        </span>
      )}
    </Button>
  )
}

export default CoreButton
