import Header from './../Header'
import style from './styles.module.scss'

export const UnauthenticatedLayout = ({ ...props }) => {
  return (
    <>
      <Header>
        <h1 className="text-center">FzeroCloud</h1>
      </Header>
      <div className={style.main}>{props.children}</div>
    </>
  )
}

export default UnauthenticatedLayout
