import classNames from 'classnames';
import CoreBadge from '../../../../Badge';
import ButtonsGroup from '../ButtonsGroup'
import styles from './styles.module.scss'

export interface ITopContainerProps {
  names: string;
  image: string;
  status: string;
}

const TopContainer = (props: ITopContainerProps) => {

  const {names, image, status} = props

  function makeStatusClassName(): string {
    const lowerCaseOfStatus = status.toLowerCase();
    if(lowerCaseOfStatus.includes('up')){
      return styles.upStatus
    }
    if(lowerCaseOfStatus.includes('exited')){
      return styles.exitedStatus
    }

    return styles.defaultStatus
  }

  return (
    <div className={styles.topContainer}>
      <div className={styles.leftSide}>
      <div className={styles.containerNamesAndStatus}>
        <h2 className={styles.containerNames}>{names}</h2>
        <CoreBadge className={classNames(styles.containerStatus, makeStatusClassName())}>{status}</CoreBadge>
      </div>
      <h5 className={styles.containerImage}>{image}</h5>
      </div>
      <ButtonsGroup />
    </div>
  )
}

export default TopContainer
