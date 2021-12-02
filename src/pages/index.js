import { Home } from './Home'
import { Admin } from './Admin'
import { login } from './login'
import { online } from './online'
import { viewRes } from './viewRes'
import { seriousGame } from './seriousGame'
import { motivation } from './motivation'
import { register } from './register'
import { technique } from './technique'
import { C } from './C'
import { js } from './js'
import { python } from './python'



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
    auth: true
  },
  {
    page: login,
    path: "login"
  },
  {
    page: online,
    path: "online",
    auth: true
  },
  {
    page: viewRes,
    path: "viewRes",
    auth: true
  },
  {
    page: seriousGame,
    path: "seriousgame",
    auth: true
  },
  {
    page: motivation,
    path: "motivation",
    auth: true
  },
  {
    page: technique,
    path: "technique",
    auth: true
  },
  {
    page: C,
    path: "c",
    auth: true
  },
  {
    page: js,
    path: "js",
    auth: true
  },
  {
    page: python,
    path: "python",
    auth: true
  },
]


export default pages