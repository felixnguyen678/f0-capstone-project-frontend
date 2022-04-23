import { useMemo, useState } from 'react'
import lowerCase from 'lodash/lowerCase'
import { observer } from 'mobx-react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { EContainerStatus } from '../../../../../constants/enums/container'
import { useStores } from '../../../../../hooks/useStores'
import routes from '../../../../../routes'
import CustomButton from '../../../../Button'
import styles from './styles.module.scss'

const ButtonsGroup = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { containerStore } = useStores()

  const isRunningContainer = useMemo<boolean>(() => {
    const currentStatus = containerStore.container?.status

    return lowerCase(currentStatus).includes(EContainerStatus.UP) ?? false
  }, [containerStore.container])

  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleAfterActionSuccess(): Promise<void> {
    await containerStore.fetchContainer(id!)
    setIsLoading(false)
    toast.success('Action success')
  }

  async function startContainer(): Promise<void> {
    if (id) {
      try {
        setIsLoading(true)
        await containerStore.startContainer(id)
        await handleAfterActionSuccess()
      } catch (error) {
        toast.error((error as Error).message)
      }
    }
  }

  async function restartContainer(): Promise<void> {
    if (id) {
      try {
        setIsLoading(true)
        await containerStore.restartContainer(id)
        await handleAfterActionSuccess()
      } catch (error) {
        toast.error((error as Error).message)
      }
    }
  }

  async function stopContainer(): Promise<void> {
    if (id) {
      try {
        setIsLoading(true)
        await containerStore.stopContainer(id)
        await handleAfterActionSuccess()
      } catch (error) {
        toast.error((error as Error).message)
      }
    }
  }

  async function removeContainer(): Promise<void> {
    if (id) {
      try {
        setIsLoading(true)
        await containerStore.removeContainer(id)

        toast.success('Container removed')
        navigate(routes.containers.value)
      } catch (error) {
        toast.error((error as Error).message)
      }
    }
  }

  return (
    <div className={styles.buttonsGroup}>
      <CustomButton
        className={styles.startButton}
        onClick={isRunningContainer ? restartContainer : startContainer}
        loading={isLoading}
      >
        {isRunningContainer ? 'Restart' : 'Start'}
      </CustomButton>

      <CustomButton className={styles.stopButton} onClick={stopContainer} loading={isLoading}>
        Stop
      </CustomButton>

      <CustomButton className={styles.removeButton} onClick={removeContainer} loading={isLoading}>
        Remove
      </CustomButton>
    </div>
  )
}

export default observer(ButtonsGroup)
