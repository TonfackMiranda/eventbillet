import React from 'react'
import './publicHeader.scss'
import { NavLink } from 'react-router-dom'

const PublicHeader = () => {
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
            <nav>
                <ul>
                    {Menu.map((item, index) => (
                        <li key={index}><NavLink to={item.path} className={(Link) => (Link.isActive ? 'link-active' : '')}>{item.display}</NavLink></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default PublicHeader