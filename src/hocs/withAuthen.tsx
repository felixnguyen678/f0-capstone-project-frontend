import AuthenticatedLayout from '../layouts/AuthenticatedLayout'

const withAuthen = (Component: any) => (props: any) => {
  return (
    <>
      <AuthenticatedLayout>
        <Component {...props} />
      </AuthenticatedLayout>
    </>
  )
}

export default withAuthen
