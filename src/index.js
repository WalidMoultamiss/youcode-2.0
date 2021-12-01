import { back } from './helpers'
import { header } from './components'
import { goTo, router, UserObj, render } from "./helpers"

export default async function app() {
  let user = await UserObj.getUsers()
  
  //render Header components
  render({
    path: "header",
    page: header
  }, UserObj.users)

  //Listener on navigator go back 
  back()

  //Handle routing system on load
  router()
  goTo(location.pathname)

  //Our Global Router Link 
  window.goTo = goTo
}