import { Home } from './Home'
import { Admin } from './Admin'
import { login } from './login'
import { online } from './online'
import { viewRes } from './viewRes'
import { seriousGame } from './seriousGame'
import { motivation } from './motivation'
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
    page: Home,
    path: "Home"
  },
  {
    page: Admin,
    path: "admin"
  },
  {
    page: login,
    path: "login"
  },
  {
    page: online,
    path: "online"
  },
  {
    page: viewRes,
    path: "viewRes"
  },
  {
    page: seriousGame,
    path: "seriousgame"
  },
  {
    page: motivation,
    path: "motivation"
  },
  {
    page: technique,
    path: "technique"
  },
  {
    page: C,
    path: "c"
  },
  {
    page: js,
    path: "js"
  },
  {
    page: python,
    path: "python"
  },
]


export default pages