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
        <div className="pages">
            <PrivateHeader
                sidebar={sidebar}
                setSidebar={setSidebar}
            />
            <main className='main'>
                <Sidebar
                    profil={profil}
                    setProfil={setProfil}
                    sidebar={sidebar}
                    setSidebar={setSidebar}
                />
                <div className={sidebar ? "content-max" : "content"}>
                    <Profil
                        profil={profil}
                        setProfil={setProfil}
                    />
                    <Routes>
                        <Route element={<Layout />}>
                            <Route index element={<Dashboard />} />
                            <Route path='/onlyprivateroute/dashboard' element={<Dashboard />} />
                        </Route>
                    </Routes>
                </div>
            </main>
        </div>
    )
}

export default PrivateRouter