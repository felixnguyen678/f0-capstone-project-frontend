import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  Button,
  Form,
  FormGroup,
  // Input,
  Label
} from 'reactstrap'
import { useStores } from '../../../../../hooks/useStores'
import routes from '../../../../../routes'
import { ILoginRequest } from '../../../../../types/authenticate'
import styles from './styles.module.scss'

const LoginForm = () => {
  const { authStore } = useStores()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<ILoginRequest>()
  const login = async (data: ILoginRequest) => {
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
          <input type="email" className="form-control" id="email" {...register('email')} />
        </FormGroup>
        <FormGroup className={styles.form}>
          <Label htmlFor="password">Password</Label>
          <input type="password" className="form-control" id="password" {...register('password')} />
        </FormGroup>
        <Button className={styles.button} type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm
