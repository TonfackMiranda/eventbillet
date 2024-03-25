import React from 'react'
import Login from '../pages/Auth'
import { Route, Routes } from 'react-router-dom'

const AuthRouter = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='*' element={<Login />} />
    </Routes>
  )
}

export default AuthRouter