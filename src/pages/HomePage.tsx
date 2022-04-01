import { useStores } from "../hooks/useStores";

const HomePage = () => {
  const { testStore } = useStores();
  console.log({ testStore: testStore.status });

  return <div>Home Page</div>;
};

export default HomePage;
