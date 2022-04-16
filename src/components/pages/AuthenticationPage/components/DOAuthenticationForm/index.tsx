import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Form, FormGroup, Input, Label, Spinner } from 'reactstrap'
import { TEST_DO_TOKEN } from '../../../../../constants/config'
import { ECloudService } from '../../../../../constants/enums/cloudService'
import { useStores } from '../../../../../hooks/useStores'
import routes from '../../../../../routes'
import { IDoAuthenticationRequest } from '../../../../../types/digitalOcean/authenticate'
import styles from './styles.module.scss'

function DOAuthenticationForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { handleSubmit, control, setValue } = useForm<IDoAuthenticationRequest>()
  const { doAuthStore, cloudServiceStore } = useStores()
  const navigate = useNavigate()

  async function loginDo(data: IDoAuthenticationRequest): Promise<void> {
    const cloudServiceName = ECloudService.DIGITAL_OCEAN

    try {
      setIsLoading(true)
      await doAuthStore.loginDO(data)

      await cloudServiceStore.setCurrentCloudService(cloudServiceName)
      await cloudServiceStore.fetchCurrentDroplet()
      toast.success('Login cloud service successfully.')
      navigate(routes.home.value)
    } catch (error) {
      toast.error('Invalid token, please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <Form onSubmit={handleSubmit(loginDo)}>
        <FormGroup className={styles.inputContainer}>
          <Label htmlFor="token">Digital Ocean Authorization Key</Label>
          <Controller
            control={control}
            name="token"
            rules={{ required: true }}
            render={({ field: { onChange, value, name } }) => (
              <Input
                id="token"
                name={name}
                placeholder="Enter your authorization key"
                value={value}
                onChange={onChange}
                readOnly={isLoading}
              />
            )}
          />
        </FormGroup>

        <div className={styles.buttonContainer}>
          <Button
            className={styles.testButton}
            disabled={isLoading}
            onClick={() => {
              setValue('token', TEST_DO_TOKEN)
            }}
          >
            Test
          </Button>
          <Button className={styles.submitButton} type="submit" disabled={isLoading}>
            {isLoading ? <Spinner animation="border" size="sm" /> : <span>Login</span>}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default DOAuthenticationForm
