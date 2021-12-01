import { Home } from './Home'
import { About } from './About'
import {login} from './login'



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
  }
]


export default pages