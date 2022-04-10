import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from './styles.module.scss'

function AWSAuthenticationForm() {
  return (
    <div className={styles.input}>
      <Form>
        <FormGroup className={styles.inputForm}>
          <Label className={styles.label} htmlFor="authorizationAWSKey">
            Please enter authorization AWS key
          </Label>
          <Input
            type="text"
            name="authorizationAWSKey"
            id="authorizationAWSKey"
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

export default AWSAuthenticationForm
