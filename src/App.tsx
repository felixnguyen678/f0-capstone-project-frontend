import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BE_URL } from './constants/config'
import BillingPage from './pages/billing'
import ContainersPage from './pages/containers'
import HomePage from './pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'remixicon/fonts/remixicon.css'
import './scss/global.scss'
import LoginPage from './pages/LoginPage'
import MonitoringPage from './pages/monitoring'
import ProfilePage from './pages/ProfilePage'
import ResourceAlertsPage from './pages/resource-alerts'
import UsersPage from './pages/users'
import VirtualPrivateServersPage from './pages/virtual-private-servers'
import routes from './routes'

function App(): JSX.Element {
  console.log({ env: BE_URL })

  console.log({ env: process.env.REACT_APP_BE_URL })

  return (
    <Routes>
      <Route path={routes.home.value} element={<HomePage />} />
      <Route path={routes.myProfile.value} element={<ProfilePage />} />
      <Route path={routes.login.value} element={<LoginPage />} />
      <Route path={routes.billing.value} element={<BillingPage />} />
      <Route path={routes.resourceAlerts.value} element={<ResourceAlertsPage />} />
      <Route path={routes.virtualPrivateServers.value} element={<VirtualPrivateServersPage />} />
      <Route path={routes.containers.value} element={<ContainersPage />} />
      <Route path={routes.users.value} element={<UsersPage />} />
      <Route path={routes.monitoring.value} element={<MonitoringPage />} />
    </Routes>
  )
}

export default App
