import { Button, Input } from 'reactstrap'
import styles from './styles.module.scss'

const SearchBar = () => {
  return (
    <div className={styles.searchWrapper}>
      <Input className={styles.input} placeholder="Search container name ..." />
      <Button className={styles.searchButton}>Search</Button>
    </div>
  )
}

export default SearchBar
