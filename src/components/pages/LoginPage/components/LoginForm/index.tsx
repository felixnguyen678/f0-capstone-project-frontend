import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from './styles.module.scss'

const LoginForm = () => {
  return (
    <div className={styles.signInForm}>
      <h2 className={styles.title}>Sign In</h2>
      <Form className={styles.formContainer}>
        <FormGroup>
          <Label htmlFor="email">Username</Label>
          <Input type="email" name="email" id="email" placeholder="phanle@gmail.com" />
        </FormGroup>
        <FormGroup className={styles.form}>
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="********" />
        </FormGroup>
        <Button className={styles.button} type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm
