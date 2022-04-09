import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { useStores } from '../../../../../hooks/useStores'
import routes from '../../../../../routes'
import { ILoginRequest } from '../../../../../types/authenticate'
import styles from './styles.module.scss'

const LoginForm = () => {
  const { authStore } = useStores()
  const navigate = useNavigate()
  const { register, handleSubmit, control } = useForm<ILoginRequest>()

  async function login(data: ILoginRequest) {
    try {
      await authStore.login(data)
      navigate(routes.home.value)
    } catch (error) {
      toast.error('Invalid email or password, please try again')
    }
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
            render={({ field: { onChange, onBlur, value, ref, name } }) => (
              <Input
                type="email"
                id="email"
                name={name}
                placeholder="example@mail.com"
                innerRef={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </FormGroup>
        <FormGroup className={styles.form}>
          <Label htmlFor="password">Password</Label>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value, ref, name } }) => (
              <Input
                type="password"
                id="password"
                name={name}
                placeholder="********"
                innerRef={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </FormGroup>
        <Button className={styles.button} type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm
