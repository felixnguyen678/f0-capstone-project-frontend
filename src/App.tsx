import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BE_URL } from './constants/config'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import routes from './routes'
import './scss/global.scss'

function App(): JSX.Element {
  console.log({ env: BE_URL })

  console.log({ env: process.env.REACT_APP_BE_URL })

  return (
    <Routes>
      <Route path={routes.home.value} element={<HomePage />} />
      <Route path={routes.myProfile.value} element={<ProfilePage />} />
      <Route path={routes.login.value} element={<LoginPage />} />
    </Routes>
  )
}

export default App
