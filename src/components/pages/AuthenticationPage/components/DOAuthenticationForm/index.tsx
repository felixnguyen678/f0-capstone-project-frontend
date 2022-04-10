import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from './styles.module.scss'

function DOAuthenticationForm() {
  return (
    <div className={styles.container}>
      <Form>
        <FormGroup className={styles.inputContainer}>
          <Label htmlFor="input-key">Digital Ocean Authorization Key</Label>

          <Input name="authorizationDOKey" id="input-key" placeholder="Enter your authorization key" />
        </FormGroup>

        <div className={styles.buttonContainer}>
          <Button type="submit" className={styles.button}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default DOAuthenticationForm
