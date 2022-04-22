import { useState } from 'react'
import CoreButton from '../../../../Button'
import styles from './styles.module.scss'

const ButtonGroups = () => {

  const [isStartLoading, setIsStartLoading] = useState<boolean>(false)

  function callAPI(): void{
    setIsStartLoading(true)
    setTimeout(() => {
      setIsStartLoading(false)
    }, 1000)
  }

  return(
    <div className={styles.buttonsGroup}>
      <CoreButton className={styles.startButton} onClick={()=> {callAPI()}} loading={isStartLoading}>Start/Restart</CoreButton>
      <CoreButton className={styles.stopButton}>Stop</CoreButton>
      <CoreButton className={styles.removeButton}>Remove</CoreButton>
    </div>
  )
}


export default ButtonGroups