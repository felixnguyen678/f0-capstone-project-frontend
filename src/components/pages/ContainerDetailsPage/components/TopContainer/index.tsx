import cx from 'classnames'
import { EContainerStatus } from '../../../../../constants/enums/container'
import { IContainer } from '../../../../../types/digitalOcean/container'
import CustomBadge from '../../../../Badge'
import ButtonsGroup from '../ButtonsGroup'
import styles from './styles.module.scss'

export interface ITopContainerProps {
  container: IContainer
}

const TopContainer = (props: ITopContainerProps) => {
  const { names, image, status } = props.container

  function getStatusClassName(): string {
    const lowerCaseOfStatus = status.toLowerCase()

    if (lowerCaseOfStatus.includes(EContainerStatus.UP)) {
      return styles.upStatus
    }

    if (lowerCaseOfStatus.includes(EContainerStatus.EXITED)) {
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

          <CustomBadge className={cx(styles.status, getStatusClassName())}>{status}</CustomBadge>
        </div>
      </div>
      <ButtonsGroup />
    </div>
  )
}

export default TopContainer
