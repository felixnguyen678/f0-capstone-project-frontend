import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useStores } from '../hooks/useStores'
import AuthenticatedLayout from '../layouts/AuthenticatedLayout'
import routes from '../routes'

const withAuthen = (Component: any) => (props: any) => {
  const { authStore, doAuthStore } = useStores()
  const navigate = useNavigate()

  function handleCurrentUserNotFound(): void {
    navigate(routes.login.value)
    toast.error('Something may wrong, please login again ')
  }

  function handleCloudServiceAccountNotFound(): void {
    navigate(routes.cloudServiceLogin.value)
    toast.error('Cloud service account not found, please login again ')
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

  async function getMyCloudServiceAccount(): Promise<void> {
    try {
      const doAccount = await doAuthStore.getDoAccount()
      if(!doAccount){
        handleCloudServiceAccountNotFound();
      }
    } catch (error) {
      handleCloudServiceAccountNotFound()
    }
  }


  useEffect(() => {
    getMyUser()
    getMyCloudServiceAccount()
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
