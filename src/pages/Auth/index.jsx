import React, { useState } from 'react'
import * as RemixIcons from "react-icons/ri"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import * as Spinners from 'react-loader-spinner'
// import { Authentification } from '../../services/authentificationService'
// import { Account } from '../../services/accountService'
import './login.scss'

const Login = () => {
   const Navigate = useNavigate()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [wait, setWait] = useState(true)

   const handleLogin = async (e) => {
      e.preventDefault()
      if (email === "" || password === "") {
         toast.error("Veuillez remplir tous les champs !")
      }
      else {
         setWait(false)
         Navigate('/onlyprivateroute/dashboard')
         try {
            // const res = await Authentification.login(email, password)
            // const token = res.data.token
            // const idUser = res.data.user.id
            // const role = res.data.user.Role.id
            // const env = res.data.user.Env.id
            // const idStatus = res.data.user.Status.id
            // setWait(true)
            // if (res.data.user.Status.name !== 'actif') {
            //    toast.error("Accès non authorisé !")
            // }
            // else {
            //    Account.saveToken(token, idUser, role, env, idStatus)
            //    Navigate("/dashboard")
            // }

         } catch (err) {
            setWait(true)
            if (err.response) {
               if (err.response.data.name === 'UserAutNotFound') {
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
               else if (err.response.data.name === 'NotFound') {
                  toast.error("Demande non trouvée !")
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
      <div className="login">
         <form onSubmit={handleLogin} method='post' className="form">
            <h1 className="logo">EventWorld</h1>
            <h2>Connexion</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' autoComplete='off' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Mot de passe' autoComplete='off' />
            <div className="btn-submit">
               {
                  wait ?
                     <button type="submit" className='btn-custom primary'>Se connecter</button> :
                     <button className='btn-custom primary-progress'>Vérification <span className='ms-2'><Spinners.TailSpin height="20" width="20" ariaLabel="tail-spin-loading" radius="5" color="#fff" /></span></button>
               }
               <p onClick={() => Navigate('/auth/forgot-pass')}>Mot de passe oublié ?</p>
            </div>
         </form>
      </div>
   )
}

export default Login