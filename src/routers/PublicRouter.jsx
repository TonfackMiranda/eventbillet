import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Partner, Connection, Event, TypeEvent, DetailsEvent } from '../pages'
import { AuthGuardPublic } from '../utils/utilsAuthGuard'
import More from './More'

const PublicRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/partner' element={<Partner />} />
            <Route path='/connection' element={<Connection />} />
            <Route path='/event/*' element={
                <AuthGuardPublic>
                    <More />
                </AuthGuardPublic>}
            />
        </Routes>
    )
}

export default PublicRouter