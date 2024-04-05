import Axios from "./callerService"

const route = 'customers'

const getAll = (order, filter, search, limit, page) => {
   return Axios.get(`/${route}?limit=${limit}&page=${page}&sort=${order}&filter=${filter}&k=${search}`)
}

const getCount = () => {
   return Axios.get(`/${route}`)
}

const getOne = (id) => {
   return Axios.get(`/${route}/${id}`)
}

const signUp = (email, password) => {
   return Axios.post(`/${route}/sign-up`, {email: email, password: password})
}

const signIn = (email, password) => {
   return Axios.post(`/${route}/sign-in`, {email: email, password: password})
}

const checkEmail = (data) => {
   return Axios.patch(`/${route}/check-email`, data)
}

const changePassword = (data) => {
   return Axios.patch(`/${route}/password`, data)
}

const deleted = (id) => {
   return Axios.delete(`/${route}/${id}`)
}

export const Customer = {
   getAll,
   getCount,
   getOne,
   signUp,
   signIn,
   checkEmail,
   changePassword,
   deleted
}