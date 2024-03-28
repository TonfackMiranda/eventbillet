import React from 'react'
import Login from '../pages/Auth'
import { Route, Routes } from 'react-router-dom'
import { ForgotPassword } from '../pages'

const AuthRouter = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='forgot-pass' element={<ForgotPassword />} />
      <Route path='*' element={<Login />} />
    </Routes>
  )
}

export default AuthRouter