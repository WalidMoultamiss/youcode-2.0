import { } from './classes'
import { } from './helpers'
import { } from './components'
import pages from './pages'
import { render, router } from "./helpers"


export default function app() {
  const goTo = (path) => {
    console.log("path", path);
    history.pushState({ usreid: 3 }, path, "/?page=" + path)
    router()
    let page = pages.find(page => {
      let checker = path === "/" ? path : path.replace('/', "")
      return page?.path.toLowerCase() === checker
    })
    render(page)
  }
  window.onpopstate = () => {
    router()
  }

  router()
  goTo(location.pathname)
  window.goTo = goTo
}