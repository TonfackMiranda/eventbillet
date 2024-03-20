import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Partner, Connection, Event, TypeEvent, DetailsEvent } from '../pages'

const PublicRouter = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/partner' element={<Partner/>}/>
            <Route path='/connection' element={<Connection/>}/>
            <Route path='/event' element={<Event/>}/>
            <Route path='/event/:type' element={<TypeEvent/>}/>
            <Route path='/event/:type/details/:details' element={<DetailsEvent/>}/>
        </Routes>
    )
}

export default PublicRouter