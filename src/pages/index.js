import { Home } from './Home'
import { Admin } from './Admin'
import { login } from './login'
import { online } from './online'
import { viewRes } from './viewRes'



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

]


export default pages