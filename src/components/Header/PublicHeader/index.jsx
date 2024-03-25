import React, { useState } from 'react'
import './publicHeader.scss'
import { NavLink } from 'react-router-dom'

const PublicHeader = () => {
    const [menu, setMenu] = useState(false)
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
                    {Menu.map((item, index) => (
                        <li key={index}><NavLink to={item.path} className={(Link) => (Link.isActive ? 'link-active' : '')}>{item.display}</NavLink></li>
                    ))}
                </ul>
            </nav>
            <div className='menu' onClick={() => setMenu(!menu)}>
                <div className='Icon-menu'></div>
            </div>
        </header>
    )
}

export default PublicHeader