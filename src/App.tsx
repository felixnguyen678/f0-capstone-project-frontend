import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import 'remixicon/fonts/remixicon.css'
import BillingPage from './pages/billing'
import CloudServiceLoginPage from './pages/cloud-service-login'
import ContainersPage from './pages/containers'
import ContainerDetailPage from './pages/containers/[id]/containerDetailPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MonitoringPage from './pages/monitoring'
import ProfilePage from './pages/ProfilePage'
import ResourceAlertsPage from './pages/resource-alerts'
import UsersPage from './pages/users'
import VirtualPrivateServersPage from './pages/virtual-private-servers'
import routes from './routes'
import './scss/global.scss'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={routes.home.value} element={<HomePage />} />

      <Route path={routes.myProfile.value} element={<ProfilePage />} />

      <Route path={routes.login.value} element={<LoginPage />} />

      <Route path={routes.billing.value} element={<BillingPage />} />

      <Route path={routes.resourceAlerts.value} element={<ResourceAlertsPage />} />

      <Route path={routes.virtualPrivateServers.value} element={<VirtualPrivateServersPage />} />

      <Route path={routes.containers.value} element={<ContainersPage />} />

      <Route path={routes.containers.details.path} element={<ContainerDetailPage />} />

      <Route path={routes.users.value} element={<UsersPage />} />

      <Route path={routes.monitoring.value} element={<MonitoringPage />} />

      <Route path={routes.cloudServiceLogin.value} element={<CloudServiceLoginPage />} />
    </Routes>
  )
}

export default App
