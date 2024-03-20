import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Admin, Layout } from '../pages'

const PrivateRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Admin/>}/>
            </Route>
        </Routes>
    )
}

export default PrivateRouter