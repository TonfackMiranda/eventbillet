import toast from 'react-hot-toast'
import { Account } from '../services/accountService'
import { Navigate } from 'react-router-dom'

export const AuthGuard = ({ children }) => {
   const token = localStorage.getItem('lkiy-')

   if (!token) {
      // IF TOKEN IS NOT PRESENT IN LOCALSTORAGE
      return <Navigate to="/auth/login" />
   }

   const tokenValidity = Account.isLogged()

   if (!tokenValidity.isValid) {
      // IF TOKEN IS NOT VALID
      if (tokenValidity.errorCode === "TOKEN_EXPIRED") {
         toast.error("Votre session a expiré !")
      }
      else if (tokenValidity.errorCode === "INVALID_TOKEN_FORMAT") {
         toast.error("Echec de connexion !")
      }
      return <Navigate to="/auth/login" />
   }

   // IF TOKEN IS VALID, DISPLAY PROTECTED CONTENT
   return children
}

export const AuthGuardPublic = ({ children }) => {
   const token = localStorage.getItem('123hnul')

   if (!token) {
      // IF TOKEN IS NOT PRESENT IN LOCALSTORAGE
      return <Navigate to="/" />
   }

   const tokenValidity = Account.isLoggedCustomer()

   if (!tokenValidity.isValid) {
      // IF TOKEN IS NOT VALID
      if (tokenValidity.errorCode === "TOKEN_EXPIRED") {
         toast.error("Votre session a expiré !")
      }
      else if (tokenValidity.errorCode === "INVALID_TOKEN_FORMAT") {
         toast.error("Echec de connexion !")
      }
      return <Navigate to="/" />
   }

   // IF TOKEN IS VALID, DISPLAY PROTECTED CONTENT
   return children
}
