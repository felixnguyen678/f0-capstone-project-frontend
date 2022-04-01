import Title from '../components/pages/Home/components/Title'
import { useStores } from '../hooks/useStores'

const HomePage = () => {
  const { testStore } = useStores()
  console.log({ testStore: testStore.status })

  return (
    <div>
      Home Page <Title />
    </div>
  )
}

export default HomePage
