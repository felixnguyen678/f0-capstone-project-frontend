import { useState } from 'react'
import { Input } from 'reactstrap'
import styles from './styles.module.scss'

interface ISearchBarProps {
  isLoading: boolean
  fetchContainers: (keyword?: string) => Promise<void>
}

const SearchBar = (props: ISearchBarProps) => {
  const { isLoading, fetchContainers } = props

  const [keyword, setKeyword] = useState<string>('')

  async function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      await fetchContainers(keyword)
    }
  }

  return (
    <div className={styles.searchWrapper}>
      <Input
        className={styles.input}
        onChange={(event) => {
          setKeyword(event.target.value)
        }}
        onKeyDown={onKeyDown}
        disabled={isLoading}
        placeholder="Search container name ..."
        autoFocus
      />
    </div>
  )
}

export default SearchBar
