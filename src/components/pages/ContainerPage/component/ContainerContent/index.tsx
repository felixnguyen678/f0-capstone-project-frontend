import ContainerList from '../ContainerList'
import SearchBar from '../SearchBar'
import styles from './styles.module.scss'

const ContainerContent = () => {
  return (
    <div className={styles.wrapper}>
      <SearchBar />
      <ContainerList />
    </div>
  )
}

export default ContainerContent
