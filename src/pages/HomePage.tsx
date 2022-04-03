import { Button } from 'reactstrap'
import { useStores } from '../hooks/useStores'

const HomePage = () => {
  const { testStore } = useStores()
  console.log({ testStore: testStore.status })

  return (
    <div>
      <h3>F0 Capstone Project Hello</h3>
      <Button color="primary">Button</Button>
    </div>
  )
}

export default HomePage
