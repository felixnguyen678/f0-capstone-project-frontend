import { useState } from 'react'
import CustomButton from '../../../../Button'
import styles from './styles.module.scss'

const ButtonsGroup = () => {
  const [isStartLoading, setIsStartLoading] = useState<boolean>(false)

  function callAPI(): void {
    setIsStartLoading(true)
    setTimeout(() => {
      setIsStartLoading(false)
    }, 1000)
  }

  return (
    <div className={styles.buttonsGroup}>
      <CustomButton
        className={styles.startButton}
        onClick={() => {
          callAPI()
        }}
        loading={isStartLoading}
      >
        Start/Restart
      </CustomButton>
      <CustomButton className={styles.stopButton}>Stop</CustomButton>
      <CustomButton className={styles.removeButton}>Remove</CustomButton>
    </div>
  )
}

export default ButtonsGroup
