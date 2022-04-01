import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import routes from './routes'
import './scss/global.scss'
import { BE_URL } from './constants/config'

function App(): JSX.Element {
  console.log({ env: BE_URL })

  return (
    <Routes>
      <Route path={routes.home.value} element={<HomePage />} />
      <Route path={routes.myProfile.value} element={<ProfilePage />} />
    </Routes>
  )
}

export default App
