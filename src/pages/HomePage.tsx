import withAuthen from '../hocs/withAuthen'

const HomePage = () => {
  return (
    <>
      <h1 className="p-5"> Home page</h1>
    </>
  )
}

export default withAuthen(HomePage)
