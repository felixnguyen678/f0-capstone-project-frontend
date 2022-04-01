import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import routes from './routes'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={routes.home.value} element={<HomePage />} />
      <Route path={routes.myProfile.value} element={<ProfilePage />} />
    </Routes>
  )
}

export default App
