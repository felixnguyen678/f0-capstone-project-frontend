import withAuthen from '../hocs/withAuthen'
import { useStores } from '../hooks/useStores'

const HomePage = () => {
  const { testStore } = useStores()
  console.log({ testStore: testStore.status })

  return (
    <>
      <h1 className="p-5"> Home page</h1>
    </>
  )
}

export default withAuthen(HomePage)
