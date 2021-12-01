import { Home } from './Home'
import { About } from './About'
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
    page: About,
    path: "About"
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