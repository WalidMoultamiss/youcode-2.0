import { Home } from './Home'
import { About } from './About'
import {login} from './login'
import {test} from './test'



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
    page: test,
    path: "test"
  }
]


export default pages