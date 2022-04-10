import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthenticationContent from '../components/pages/AuthenticationPage/components/AuthenticationContent'
import { useStores } from '../hooks/useStores'
import LoginLayout from '../layouts/LoginLayout'
import routes from '../routes';

const CloudServiceLoginPage = () => {
  const {authStore} = useStores();
  const navigate = useNavigate();

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
    <div>
      <LoginLayout>
        <AuthenticationContent />
      </LoginLayout>
    </div>
  )
}

export default observer(CloudServiceLoginPage)
