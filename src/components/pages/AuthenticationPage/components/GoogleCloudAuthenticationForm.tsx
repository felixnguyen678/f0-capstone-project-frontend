import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from './styles.module.scss'

function GCAuthenticationForm() {
  return (
    <div className={styles.input}>
      <Form>
        <FormGroup className={styles.inputForm}>
          <Label className={styles.label} htmlFor="authorizationGCKey">
            Please enter authorization Google Cloud key
          </Label>
          <Input
            type="text"
            name="authorizationGCKey"
            id="authorizationGCKey"
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

export default GCAuthenticationForm
