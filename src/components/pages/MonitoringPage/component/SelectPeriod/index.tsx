import { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import styles from './styles.module.scss'

function PeriodDropdowns() {
  const [dropdownopen, setDropdownopen] = useState(false)
  const handleDropdownToggle = () => {
    setDropdownopen((prevState) => !prevState)
  }

  return (
    <div>
      <Dropdown isOpen={dropdownopen} toggle={handleDropdownToggle}>
        <DropdownToggle color="success" caret>
          Select period
        </DropdownToggle>
        <DropdownMenu className={styles.dropdownMenu}>
          <DropdownItem>1 hour</DropdownItem>
          <DropdownItem>6 hours</DropdownItem>
          <DropdownItem>24 hours</DropdownItem>
          <DropdownItem>7 days</DropdownItem>
          <DropdownItem>14 days</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default PeriodDropdowns
