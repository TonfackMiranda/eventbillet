import React, { useEffect, useState } from 'react'
import * as RemixIcons from "react-icons/ri"
import { useLocation, useNavigate } from 'react-router-dom'
// import logo from '../../assets/img/logo/cs-logo-red.png'
import Access from '../../../utils/utilsAccess'
import './privateHeader.scss'
import toast from 'react-hot-toast'

const PrivateHeader = ({ sidebar, setSidebar }) => {
    const Navigate = useNavigate()
    const location = useLocation()
    const access = Access()
    const idUser = localStorage.getItem('id')

    const id = localStorage.getItem("id")
    const order = 'asc'
    const filter = 'name'
    const status = ''
    const search = ''
    const limit = 0
    const page = 0

    const [allCount, setAllCount] = useState(0)
    const [company, setCompany] = useState('')
    // const [theme, setTheme] = useState(localStorage.getItem('theme'))

    // REDIRECTION
    const newOrganization = () => Navigate('/organizations/new')
    const newCompany = () => Navigate('/companies/new')
    const newSurvey = () => Navigate('/surveys/new')
    const newUser = () => Navigate('/users/new')
    const newProduct = () => Navigate('/managers/products/new')
    const newTable = () => Navigate('/managers/tables/new')

    // GET COMPANY BY USER
    // useEffect(() => {
    //     const loadCompany = async () => {
    //         try {
    //             const res = await User.getOrganizationCompany(idUser)
    //             const idCompany = res.data.content.Company.id
    //             setCompany(idCompany)
    //         } catch (err) {
    //         }
    //     }

    //     loadCompany()
    // }, [idUser])

    // // FETCH ALL DATA
    // useEffect(() => {
    //     const loadData = async () => {
    //         try {
    //             if (access === 20) {
    //                 let res = await Orders.getOrderByCompany(company, order, filter, search, status, limit, page)
    //                 setAllCount(res.data.content.totalElements)
    //             }
    //         }
    //         catch (err) {

    //         }
    //     }

    //     loadData()
    // }, [access, idUser, eventOrder, company])

    return (
        <header className='private-header'>
            <div className="left" onClick={() => Navigate('/onlyprivateroute/dashboard')}>
                <div className="brand">
                    {/* <img src={logo} alt="" /> */}
                    <span>EventWorld</span>
                </div>
            </div>
            <div className="right">
                <div className="not-sm">
                    {access != 20 && (
                        location.pathname.includes('organizations') && !location.pathname.includes('new') ?
                            <button className='btn-custom-2 primary' onClick={newOrganization}>
                                <RemixIcons.RiAddLine />
                                <small>Nouvelle Organizat.</small>
                            </button> :
                            location.pathname.includes('companies') && !location.pathname.includes('new') ?
                                <button className='btn-custom-2 primary' onClick={newCompany}>
                                    <RemixIcons.RiAddLine />
                                    <small>Nouvelle Entreprise</small>
                                </button> :
                                location.pathname.includes('surveys') && !location.pathname.includes('new') ?
                                    <button className='btn-custom-2 primary' onClick={newSurvey}>
                                        <RemixIcons.RiAddLine />
                                        <small>Nouvelle Enquête</small>
                                    </button> :
                                    location.pathname.includes('users') && !location.pathname.includes('new') ?
                                        <button className='btn-custom-2 primary' onClick={newUser}>
                                            <RemixIcons.RiAddLine />
                                            <small>Nouveau utilisateur</small>
                                        </button> :
                                        location.pathname.includes('managers') && location.pathname.includes('products') ?
                                            <button className='btn-custom-2 primary' onClick={newProduct}>
                                                <RemixIcons.RiAddLine />
                                                <small>Ajouter un produit</small>
                                            </button> :
                                            location.pathname.includes('managers') && location.pathname.includes('tables') ?
                                                <button className='btn-custom-2 primary' onClick={newTable}>
                                                    <RemixIcons.RiAddLine />
                                                    <small>Ajouter une table</small>
                                                </button> :
                                                <button className='btn-custom-2 primary' onClick={newSurvey}>
                                                    <RemixIcons.RiAddLine />
                                                    <small>Nouveau évenement</small>
                                                </button>

                    )}

                    {/* <div className="notification-icon" onClick={toggleTheme}>
                        {theme === 'light' ? <RemixIcons.RiMoonLine /> : <RemixIcons.RiSunLine />}
                    </div> */}
                    {access === 20 && (
                        <div className="notification-icon" onClick={() => Navigate('/orders')}>
                            <RemixIcons.RiNotification3Line />
                            <span className='new-notification'>{allCount}</span>
                        </div>
                    )}
                </div>
                <div className="notification-icon" onClick={() => setSidebar(!sidebar)}>
                    <RemixIcons.RiMenu4Line size={18} />
                </div>
            </div>
        </header >
    )
}

export default PrivateHeader