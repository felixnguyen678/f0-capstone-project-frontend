import UnauthenticatedLayout from '../layouts/UnauthenticatedLayout'

const withUnauthen = (Component: any) => (props: any) => {
  return (
    <>
      <UnauthenticatedLayout>
        <Component {...props} />
      </UnauthenticatedLayout>
    </>
  )
}

export default withUnauthen
