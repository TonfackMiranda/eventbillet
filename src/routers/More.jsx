import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { DetailsEvent, Event, TypeEvent } from '../pages'


const More = () => {
    return (
        <Routes>
            <Route path='' element={<Event />}/>
            <Route path=':type' element={<TypeEvent />} />
            <Route path=':type/details/:details' element={<DetailsEvent />} />
        </Routes>
    )
}

export default More