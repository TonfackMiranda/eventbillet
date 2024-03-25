import React, { useState, useEffect } from 'react'
import { IconContext } from 'react-icons/lib'
// import { FirstGroupInternal, FirstGroupExternal, FirstGroupExternalServer } from '../../components/Dashboard/FirstGroup'
// import { SecondGroupExternal, SecondGroupExternalServer, SecondGroupInternal } from '../../components/Dashboard//SecondGroup'
import Access from '../../utils/utilsAccess'
import './dashboard.scss'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
   // const access = Access()
   const Navigate = useNavigate()
   const idUser = localStorage.getItem('id')


   return (
      <>
         
      </>
   )
}

export default Dashboard