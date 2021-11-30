import { } from './classes'
import { } from './helpers'
import { } from './components'
import pages from './pages'
import { render, router } from "./helpers"


export default function app() {
  const goTo = (path) => {
    history.pushState({ usreid: 3 }, path, "/?page=" + path)
    router()
    let page = pages.find(page => page.path.toLowerCase() === path)
    render(page)
  }
  window.goTo = goTo
}