import { Home } from './Home'
import { Admin } from './Admin'
import { login } from './login'
import { online } from './online'



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
  }
]


export default pages