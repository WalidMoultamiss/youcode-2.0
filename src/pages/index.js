import { Home } from './Home'
import { Admin } from './Admin'
import { login } from './login'
import { online } from './online'
import { viewRes } from './viewRes'
import { seriousGame } from './seriousGame'
import { motivation } from './motivation'
import { register } from './register'



let pages = [
  {
    page: Home,
    path: "/"
  }, ,
  {
    page: register,
    path: "register"
  },
  {
    page: Admin,
    path: "admin",
    auth:true
  },
  {
    page: login,
    path: "login"
  },
  {
    page: online,
    path: "online",
    auth:true
  },
  {
    page: viewRes,
    path: "viewRes",
    auth:true
  },
  {
    page: seriousGame,
    path: "seriousgame",
    auth:true
  },
  {
    page: motivation,
    path: "motivation",
    auth:true
  }

]


export default pages