import React, { useState } from 'react'
// import * as Remix from 're'
import PublicHeader from '../../components/Header/PublicHeader'
import './connection.scss'
import Footer from '../../components/Footer'
import ConnectionImage from '../../assets/images/undraw_connected_world_wuay.svg'

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
        <div className="left">
          <img src={ConnectionImage} alt="" />
        </div>
        <div className="right">
          {haveAccount ? (
            <form onSubmit={handleSignIn}>
              <h2>Connexion</h2>
              <input type="email" placeholder='Email' />
              <input type="password" placeholder='Mot de passe' />
             <button className='btn-custom primary'>Se connecter</button>
              <p>Créer un compte ? <button className='btn-custom primary' onClick={() => setHaveAccount(false)}>S'inscrire</button></p>
            </form>
          ) : (
            <form onSubmit={handleCreateAccount}>
              <h2>Créer un compte</h2>
              <input type="email" placeholder='Email' />
              <input type="password" placeholder='Mot de passe' />
              <input type="password" placeholder='Confirmer mot de passe' />
             <button className='btn-custom primary'>S'inscrire</button>
              <p>Avez-vous déjà un compte ? <button className='btn-custom primary' onClick={() => setHaveAccount(true)}>Se connecter</button></p>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Connection