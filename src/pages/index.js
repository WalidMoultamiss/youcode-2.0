import { Home } from './Home'
import { Admin } from './Admin'
import { login } from './login'
import { online } from './online'
import { viewRes } from './viewRes'
import { seriousGame } from './seriousGame'
import { motivation } from './motivation'



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
  }

]


export default pages