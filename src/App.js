import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicRouter from './routers/PublicRouter'
import PrivateRouter from './routers/PrivateRouter'
import AuthRouter from './routers/AuthRouter'

const App = () => {
  return (
    <Routes>
       <Route path="/auth/*" element={<AuthRouter />} />
      <Route path='/*' element={<PublicRouter />} />
      <Route path='/onlyprivateroute/*' element={<PrivateRouter />} />
    </Routes>
  )
}

export default App