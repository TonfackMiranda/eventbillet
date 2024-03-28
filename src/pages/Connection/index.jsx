import React, { useState } from 'react'
import PublicHeader from '../../components/Header/PublicHeader'
import Footer from '../../components/Footer'
import * as RemixIcons from "react-icons/ri"
import './connection.scss'

const Connection = () => {
  const [haveAccount, setHaveAccount] = useState(true)

  const handleSignIn = (e) => {
    e.preventDefault()
  }

  const handleCreateAccount = (e) => {
    e.preventDefault()
  }

  return (
    <div className='connection'>
      <PublicHeader />
      <div className="content">
        {haveAccount ? (
          <form onSubmit={handleSignIn}>
            <h1>Connexion</h1>
            <p className='option'>Nouveau utilisateur ? <span onClick={() => setHaveAccount(false)}>Créer un compte</span></p>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Mot de passe' />
            <button className='btn-custom primary'>Se connecter</button>

            <div className="other-account">
            <p>Ou</p>
            <button className='btn-custom primary-invert'> <RemixIcons.RiGoogleFill size={20}/> Se connecter avec Google</button>
            <button className='btn-custom primary-invert'> <RemixIcons.RiAppleFill size={20}/> Se connecter avec Apple</button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleCreateAccount}>
            <h1>Créer un compte</h1>
            <p className='option'>Avez-vous déjà un compte ? <span onClick={() => setHaveAccount(true)}>Se connecter</span></p>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Mot de passe' />
            <input type="password" placeholder='Confirmer mot de passe' />
            <button className='btn-custom primary'>S'inscrire</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Connection