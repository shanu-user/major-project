import axios from 'axios'

const API=axios.create({baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) =>{
    // console.log(process.env.REACT_APP_JWT_SECRET_TOKEN)
    if (localStorage.getItem("Profile")) {
        req.headers.authorization = `Bearer ${
          JSON.parse(localStorage.getItem("Profile")).token
        }`;
      }
    return req
})
export const logIn=(authData)=>API.post('/users/login',authData)
export const signUp=(authData)=>API.post('/users/signup',authData)
 

export const getAllUsers = () => API.get('/user/getAllUsers')
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)