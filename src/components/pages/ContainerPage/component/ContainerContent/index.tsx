import ContainerList from '../ContainerList'
import SearchBar from '../SearchBar'
import styles from './styles.module.scss'

const ContainerContent = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Containers</h2>

      <SearchBar />
      <ContainerList />
    </div>
  )
}

export default ContainerContent
