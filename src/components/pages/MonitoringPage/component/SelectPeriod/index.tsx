import { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import styles from './styles.module.scss'

function PeriodDropdowns() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  function handleDropdownToggle(): void {
    setIsOpenDropdown((previousState) => !previousState)
  }

  return (
    <div>
      <Dropdown isOpen={isOpenDropdown} toggle={handleDropdownToggle}>
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
