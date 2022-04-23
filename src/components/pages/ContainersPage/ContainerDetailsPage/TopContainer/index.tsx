import cx from 'classnames'
import CoreBadge from '../../../../Badge'
import ButtonsGroup from '../ButtonsGroup'
import styles from './styles.module.scss'

export interface ITopContainerProps {
  names: string
  image: string
  status: string
}

const TopContainer = (props: ITopContainerProps) => {
  const { names, image, status } = props

  function getStatusClassName(): string {
    const lowerCaseOfStatus = status.toLowerCase()
    if (lowerCaseOfStatus.includes('up')) {
      return styles.upStatus
    }
    if (lowerCaseOfStatus.includes('exited')) {
      return styles.exitedStatus
    }

    return styles.defaultStatus
  }

  return (
    <div className={styles.topContainer}>
      <div className={styles.leftSide}>
        <h2 className={styles.names}>{names}</h2>

        <div className={styles.infoWrapper}>
          <h5 className={styles.imageName}>{image}</h5>

          <CoreBadge className={cx(styles.status, getStatusClassName())}>{status}</CoreBadge>
        </div>
      </div>
      <ButtonsGroup />
    </div>
  )
}

export default TopContainer
