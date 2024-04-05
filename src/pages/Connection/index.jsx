import React, { useState } from 'react'
import PublicHeader from '../../components/Header/PublicHeader'
import Footer from '../../components/Footer'
import toast from 'react-hot-toast'
import * as RemixIcons from "react-icons/ri"
import './connection.scss'
import { useNavigate } from 'react-router-dom'
import { Customer } from '../../services/customerService'
import { Account } from '../../services/accountService'
import * as Spinners from 'react-loader-spinner'

const Connection = () => {
  const [haveAccount, setHaveAccount] = useState(true)
  const Navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailSignUp, setEmailSignUp] = useState('')
  const [passwordSignUp, setPasswordSignUp] = useState('')
  const [passwordSignUpConfirm, setPasswordSignUpConfirm] = useState('')


  const [wait, setWait] = useState(true)

  const handleSignIn = async (e) => {
    e.preventDefault()
    if (email === "" || password === "") {
      toast.error("Veuillez remplir tous les champs !")
    }
    else {
      setWait(false)
      try {
        const res = await Customer.signIn(email, password)
        const token = res.data.token
        const idCustomer = res.data.customer.id
        setWait(true)
        Account.saveTokenCustomer(token, idCustomer)
        Navigate("/event")

      } catch (err) {
        setWait(true)
        if (err.response) {
          if (err.response.data.name === "CustomerAutNotFound") {
            toast.error("Email ou mot de passe incorrect !")
          }
          else if (err.response.data.name === 'ProcessHashFailed') {
            toast.error("Email ou mot de passe incorrect !")
          }
          else if (err.response.data.name === 'MissingData') {
            toast.error("Veuillez remplir tous les champs !")
          }
          else if (err.response.data.name === 'BadRequest') {
            toast.error("Mauvaise requête !")
          }
          else if (err.response.data.name === 'CustomerAutNotFound') {
            toast.error("Demande non trouvée !")
          }
          else {
            toast.error("Quelque chose a mal tournée.")
            toast.error("Oups !")
          }
        }
        else {
          console.log('err', err)
          toast.error("Connexion au serveur a échoué !")
        }
      }
    }
  }


  const handleCreateAccount = async (e) => {
    e.preventDefault()
    if (emailSignUp === "" || passwordSignUp === "") {
      toast.error("Veuillez remplir tous les champs !")
    }
    else {
      setWait(false)
      try {
        const res = await Customer.signUp(emailSignUp, passwordSignUp)
        const token = res.data.token
        const idCustomer = res.data.customer.id
        setWait(true)
        Account.saveTokenCustomer(token, idCustomer)
        toast.success("Compte créé avec succès !")
        Navigate("/event")

      } catch (err) {
        setWait(true)
        console.log("err", err);
        if (err.response) {
          if (err.response.data.name === 'CustomerAutNotFound') {
            toast.error("Email ou mot de passe incorrect !")
          }
          else if (err.response.data.name === 'ProcessHashFailed') {
            toast.error("Email ou mot de passe incorrect !")
          }
          else if (err.response.data.name === 'MissingData') {
            toast.error("Veuillez remplir tous les champs !")
          }
          else if (err.response.data.name === 'BadRequest') {
            toast.error("Mauvaise requête !")
          }
          else if (err.response.data.name === "CustomerAlreadyExist") {
            toast.error("Ce compte existe déjà.")
            toast.error("Désolé !")
          }
          else if (err.response.data.name === 'AccessForbidden') {
            toast.error("Contactez votre superviseur.")
            toast.error("Accès réfusé !")
          }
          else {
            toast.error("Quelque chose a mal tournée.")
            toast.error("Oups !")
          }
        }
        else {
          console.log('err', err)
          toast.error("Connexion au serveur a échoué !")
        }
      }
    }
  }

  return (
    <div className='connection'>
      <PublicHeader />
      <div className="content">
        {haveAccount ? (
          <form onSubmit={handleSignIn}>
            <h1>Connexion</h1>
            <p className='option'>Nouveau utilisateur ? <span onClick={() => setHaveAccount(false)}>Créer un compte</span></p>
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" placeholder='Mot de passe' onChange={(e) => setPassword(e.target.value)} value={password} />
            {
              wait ?
              <button className='btn-custom primary'>Se connecter</button> :
                <button className='btn-custom primary-progress'>Vérification <span style={{marginLeft: '10px'}}><Spinners.TailSpin height="20" width="20" ariaLabel="tail-spin-loading" radius="5" color="#fff" /></span></button>
            }

            <div className="other-account">
              <p>Ou</p>
              <button className='btn-custom primary-invert'> <RemixIcons.RiGoogleFill size={20} /> Se connecter avec Google</button>
              <button className='btn-custom primary-invert'> <RemixIcons.RiAppleFill size={20} /> Se connecter avec Apple</button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleCreateAccount}>
            <h1>Créer un compte</h1>
            <p className='option'>Avez-vous déjà un compte ? <span onClick={() => setHaveAccount(true)}>Se connecter</span></p>
            <input type="email" placeholder='Email' onChange={(e) => setEmailSignUp(e.target.value)} value={emailSignUp} />
            <input type="password" placeholder='Mot de passe' onChange={(e) => setPasswordSignUp(e.target.value)} value={passwordSignUp} />
            <input type="password" placeholder='Confirmer mot de passe' onChange={(e) => setPasswordSignUpConfirm(e.target.value)} value={passwordSignUpConfirm} />
            {
              wait ?
                <button className='btn-custom primary'>S'inscrire</button> :
                <button className='btn-custom primary-progress'>Encours <span style={{marginLeft: '10px'}}><Spinners.TailSpin height="20" width="20" ariaLabel="tail-spin-loading" radius="5" color="#fff" /></span></button>
            }
          </form>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Connection