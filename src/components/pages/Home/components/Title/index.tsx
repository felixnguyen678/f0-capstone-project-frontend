import { ITitleProps } from './constants'
import styles from './styles.module.scss'

const Title = (props: ITitleProps) => {
  const { title } = props

  return (
    <h1 className={styles.title}>
      {title}
      <div className={styles.child}>child</div>
    </h1>
  )
}

export default Title
