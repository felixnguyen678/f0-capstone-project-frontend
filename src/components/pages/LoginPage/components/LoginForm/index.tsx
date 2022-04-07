import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import styles from './styles.module.scss'

const LoginForm = () => {
  return (
    <div className={styles.signInForm}>
        <h2 className={styles.title}>Sign In</h2>
        <Form className={styles.formGroup}>
          <FormGroup>
            <Label htmlFor="exampleEmail" >Username</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@example.com"
            />
          </FormGroup>
          <FormGroup className={styles.form}>
            <Label htmlFor="examplePassword" >Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default LoginForm
