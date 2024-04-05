import React, { useEffect, useState } from 'react'
import * as RemixIcons from "react-icons/ri"
import './publicHeader.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { Customer } from '../../../services/customerService'
import { Account } from '../../../services/accountService'

const PublicHeader = () => {
    const customerId = localStorage.getItem('ijhjgdfd')
    const token = localStorage.getItem('123hnul')
    const Navigate = useNavigate()

    const [menu, setMenu] = useState(false)
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        Customer.getOne(customerId)
            .then((res) => {
                if (token) {
                    setAuthenticated(true)
                }
            })
            .catch((err) => setAuthenticated(false))
    }, [customerId, token])

    const logout = () => {
        Account.logoutCustomer()
        Navigate('/home')
    }

    const Menu = [
        {
            display: 'Accueil',
            path: '/'
        },
        {
            display: 'Devenir partenaire',
            path: '/partner'
        },
        {
            display: 'Connexion',
            path: '/connection'
        }
    ]

    const MenuAfterConnection = [
        {
            display: 'Accueil',
            path: '/'
        },
        {
            display: 'Devenir partenaire',
            path: '/partner'
        },
        {
            display: 'Evènement',
            path: '/event'
        },
    ]

    return (
        <header className='publicHeader'>
            <span className='logo'>EventWorld</span>
            <nav className={menu ? 'show' : ''}>
                <ul>
                    {authenticated ? MenuAfterConnection.map((item, index) => (
                        <li key={index}><NavLink to={item.path} className={(Link) => (Link.isActive ? 'link-active' : '')}>{item.display}</NavLink></li>
                    )) :
                        Menu.map((item, index) => (
                            <li key={index}><NavLink to={item.path} className={(Link) => (Link.isActive ? 'link-active' : '')}>{item.display}</NavLink></li>
                        ))
                    }
                    {authenticated ? <li onClick={logout} title='Se déconnecter' style={{ cursor: 'pointer', fontWeight: '600' }}><RemixIcons.RiLogoutBoxLine size={20} /></li> : null}
                </ul>
            </nav>
            <div className='menu' onClick={() => setMenu(!menu)}>
                <div className='Icon-menu'></div>
            </div>
        </header>
    )
}

export default PublicHeader