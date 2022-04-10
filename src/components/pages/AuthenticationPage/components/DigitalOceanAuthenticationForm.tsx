import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from './styles.module.scss'

function DOAuthenticationForm() {
  return (
    <div className={styles.input}>
      <Form>
        <FormGroup className={styles.inputForm}>
          <Label className={styles.label} htmlFor="authorizationDOKey">
            Please enter authorization Digital Ocean key
          </Label>
          <Input
            type="text"
            name="authorizationDOKey"
            id="authorizationDOKey"
            placeholder="Enter your authorization key"
          />
        </FormGroup>
        <Button type="submit" className={styles.button}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default DOAuthenticationForm
