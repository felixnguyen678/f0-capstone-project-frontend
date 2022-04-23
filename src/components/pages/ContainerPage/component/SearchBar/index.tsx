import { Input } from 'reactstrap'
import styles from './styles.module.scss'

const SearchBar = () => {
  return (
    <div className={styles.searchWrapper}>
      <Input className={styles.input} placeholder="Search container name ..." autoFocus />
    </div>
  )
}

export default SearchBar
