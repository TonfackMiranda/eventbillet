import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import * as RemixIcons from "react-icons/ri"
import SubMenu from './SubMenu'
import { ItemsExternal, ItemsInternal } from '../../data/itemsNav'
import Access from '../../utils/utilsAccess'
import logoPlaceholder from '../../assets/images/avatar/user.jpg'
import superAdmin from '../../assets/images/avatar/super admin.jpg'
import admin from '../../assets/images/avatar/admin.jpg'
import server from '../../assets/images/avatar/server.jpg'
// import { Account } from '../../services/accountService'
// import { User } from '../../services/userService'
// import config from '../../config'
import './sidebar.scss'
import { Account } from '../../services/accountService'
import config from '../../config'

const Sidebar = ({ profil, setProfil, sidebar, setSidebar }) => {
    const access = Access()
    const Navigate = useNavigate()
    const idUser = localStorage.getItem('id')

    const [user, setUser] = useState([])
    const [imageToShow, setImageToShow] = useState('')

    const logout = (e) => {
        e.preventDefault()
        if (window.confirm("Attention, vous êtes sur le point de vous déconnecter !") === true) {
            Account.logout()
            Navigate('/auth/login')
        }
    }

    // useEffect(() => {
    //     const loadUser = async () => {
    //         const res = await User.getOrganizationCompany(idUser)
    //         setUser(res.data.content)
    //     }

    //     loadUser()
    // }, [idUser])

    // START PROCESSING IMAGE RENDERING =======================================================
    useEffect(() => {
        const getImageToShow = (access, user, logoPlaceholder) => {
            let imageToShow = logoPlaceholder

            if (access === 23) {
                if (user.Company && user.Company.Organization && user.Company.Organization.picture) {
                    imageToShow = config.serverUrl + user.Company.Organization.picture
                }
            }
            else if (access === 22) {
                if (user.Company && user.Company.picture) {
                    imageToShow = config.serverUrl + user.Company.picture
                }
            }
            else if (access === 20) {
                if (user.Company && user.Company.picture) {
                    imageToShow = server
                }
            }
            else if (access === 13) {
                imageToShow = superAdmin
            }
            else if (access === 12) {
                imageToShow = admin
            }

            return imageToShow
        }

        // SIMPLIFICATION OF THE FUNCTION FOR DISPLAY
        setImageToShow(getImageToShow(access, user, logoPlaceholder))
    }, [access, user, logoPlaceholder])
    // END PROCESSING IMAGE RENDERING =======================================================

    // SUBTRING NAME IF IS LONGEST
    const substringName = (user) => {
        if (user.User) {
            const name = `${user.User.firstName} ${user.User.lastName}`
            if (name.length > 25) {
                return name.substring(0, 24) + '.'
            }
            return name
        }
    }

    return (
        <aside className={sidebar ? "SidebarMin" : "Sidebar"}>
            <div className="User" onClick={() => setProfil(!profil)}>
                <div className="Avatar">
                    <img src={imageToShow} alt="" />
                </div>
                <div className="InfoUser">
                    <span>{substringName(user)}</span>
                    <small>{user.User && user.User.Role.name}</small>
                </div>
                {profil ? <RemixIcons.RiArrowDropDownLine className='IconText' /> : <RemixIcons.RiArrowDropRightLine className='IconText' />}
            </div>

            <div className="Navigation" onClick={() => setSidebar(false)}>
                {
                    access === 11 ? ItemsInternal.map((item, index) => {
                        return <SubMenu item={item} key={index} />
                    }) :
                        access === 23 ? ItemsExternal.map((item, index) => {
                            return <SubMenu item={item} key={index} />
                        }) : ""
                }

                <NavLink to={'/auth/login'} onClick={logout}>
                    <i><RemixIcons.RiLogoutBoxLine /></i>
                    <span>Se déconnecter</span>
                </NavLink>
            </div>

        </aside>
    )
}

export default Sidebar