import React from 'react'
import { NavLink } from 'react-router-dom'
import * as RemixIcons from "react-icons/ri"
import './footer.scss'
import part1 from '../../assets/images/1.jpg'
import part2 from '../../assets/images/2.jpg'
import part3 from '../../assets/images/3.jpg'
import part4 from '../../assets/images/4.jpg'

const Footer = () => {
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
        <footer>
            <h2 className='logo'>EventWorld</h2>
            <ul>
                {Menu.map((item, index) => (
                    <li key={index}><NavLink to={item.path} className={(Link) => (Link.isActive ? 'link-active' : '')}>{item.display}</NavLink></li>
                ))}
            </ul>

            <div className="social-media">
                <div className="social"><RemixIcons.RiFacebookBoxFill size={30}/></div>
                <div className="social"><RemixIcons.RiWhatsappLine size={30}/></div>
                <div className="social"><RemixIcons.RiInstagramLine size={30}/></div>
            </div>

            <p>SITE BY ALL HIGHT CORP</p>
            {/* <p>TERMS & CONDITIONS | PRIVACY | LEGAL NOTICE</p> */}


            <div className="partner">
                <img src={part1} alt="" />
                <img src={part2} alt="" />
                <img src={part3} alt="" />
                <img src={part4} alt="" />
            </div>
        </footer>
    )
}

export default Footer