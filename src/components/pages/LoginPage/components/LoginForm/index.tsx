import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Form, FormGroup, Input, Label, Spinner } from 'reactstrap'
import { useStores } from '../../../../../hooks/useStores'
import routes from '../../../../../routes'
import { ILoginRequest } from '../../../../../types/authenticate'
import styles from './styles.module.scss'

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { authStore } = useStores()
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<ILoginRequest>()

  async function login(data: ILoginRequest): Promise<void> {
    setIsLoading(true)
    try {
      setIsLoading(true)
      await authStore.login(data)
      navigate(routes.home.value)
    } catch (error) {
      toast.error((error as Error)?.message)
    }
    setIsLoading(false)
  }
  return (
    <div className={styles.signInForm}>
      <h2 className={styles.title}>Sign In</h2>
      <Form className={styles.formContainer} onSubmit={handleSubmit(login)}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Controller
            control={control}
            name="email"
            rules={{ required: true }}
            render={({ field: { onChange, value, name } }) => (
              <Input
                type="email"
                id="email"
                name={name}
                placeholder="example@mail.com"
                value={value}
                onChange={onChange}
              />
            )}
          />
          {errors.email?.message}
        </FormGroup>
        <FormGroup className={styles.form}>
          <Label htmlFor="password">Password</Label>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value, name } }) => (
              <Input
                type="password"
                id="password"
                name={name}
                placeholder="********"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </FormGroup>
        <div className={styles.container}>
          <Button className={styles.button} type="submit" disabled={isLoading}>
            {isLoading ? <Spinner animation="border" size="sm" /> : <span>Login</span>}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
