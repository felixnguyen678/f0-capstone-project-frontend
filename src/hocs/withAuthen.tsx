import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useStores } from '../hooks/useStores'
import AuthenticatedLayout from '../layouts/AuthenticatedLayout'
import routes from '../routes'

const withAuthen = (Component: any) => (props: any) => {
  const { authStore } = useStores()
  const navigate = useNavigate()
  useEffect(() => {
    ;(async () => {
      try {
        const myUser = await authStore.getMyUser()
        if (!myUser) {
          navigate(routes.login.value)
          toast.error('Something may wrong, please login again ')
        }
      } catch (error: any) {
        navigate(routes.login.value)
        toast.error('Something may wrong, please login again ')
      }
    })()
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
