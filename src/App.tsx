import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/global.scss'
import { BE_URL } from './constants/config'

function App(): JSX.Element {
  console.log({ env: BE_URL })

  console.log({ env: process.env.REACT_APP_BE_URL })

  return (
    <Routes>
      <Route path={routes.home.value} element={<HomePage />} />
      <Route path={routes.myProfile.value} element={<ProfilePage />} />
    </Routes>
  )
}

export default App
