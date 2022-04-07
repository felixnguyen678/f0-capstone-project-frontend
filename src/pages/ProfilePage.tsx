import withAuthen from '../hocs/withAuthen'

const ProfilePage = () => {
  return (
    <>
      <h1 className="p-5"> Profile page</h1>
    </>
  )
}

export default withAuthen(ProfilePage)
