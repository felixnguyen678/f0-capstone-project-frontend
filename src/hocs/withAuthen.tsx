import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useStores } from '../hooks/useStores'
import AuthenticatedLayout from '../layouts/AuthenticatedLayout'
import routes from '../routes'

const withAuthen = (Component: any) => (props: any) => {
  const { authStore } = useStores()
  const navigate = useNavigate()

  function handleCurrentUserNotFound(): void {
    navigate(routes.login.value)
    toast.error('Something may wrong, please login again ')
  }

  async function getMyUser(): Promise<void> {
    try {
      const myUser = await authStore.getMyUser()
      if (!myUser) {
        handleCurrentUserNotFound()
      }
    } catch (error) {
      handleCurrentUserNotFound()
    }
  }
  useEffect(() => {
    getMyUser()
  }, [])
  return (
    <>
      <AuthenticatedLayout>
        <Component {...props} />
      </AuthenticatedLayout>
    </>
  )
}

export default withAuthen
