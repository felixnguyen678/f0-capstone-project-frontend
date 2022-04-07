import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import styles from './styles.module.scss'

function DOAuthenticationForm() {
  return (
    <div className={styles.input}>
      <Form>
        <FormGroup className={styles.inputForm}>
          <Label className={styles.label} htmlFor="exampleEmail">
            Please enter authorization Digital Ocean key
          </Label>
          <Input type="text" name="authorizationKey" id="exampleEmail" placeholder="Enter your authorization key" />
        </FormGroup>
        <Button type="submit" className={styles.button}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default DOAuthenticationForm
