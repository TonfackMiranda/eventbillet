import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard, Layout } from '../pages'
import PrivateHeader from '../components/Header/PrivateHeader'
import Sidebar from '../components/Sidebar'
import Profil from '../components/Profil'

const PrivateRouter = () => {
    const [profil, setProfil] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    return (
        <div className="Pages">
            <PrivateHeader
                sidebar={sidebar}
                setSidebar={setSidebar}
            />
            <main className='Main'>
                <Sidebar
                    profil={profil}
                    setProfil={setProfil}
                    sidebar={sidebar}
                    setSidebar={setSidebar}
                />
                <div className={sidebar ? "ContentMax" : "Content"}>
                    <Profil
                        profil={profil}
                        setProfil={setProfil}
                    />
                    <Routes>
                        <Route element={<Layout />}>
                            <Route index element={<Dashboard />} />
                            <Route path='/dashboard' element={<Dashboard />} />
                        </Route>
                    </Routes>
                </div>
            </main>
        </div>
    )
}

export default PrivateRouter