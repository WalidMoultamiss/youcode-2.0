import { } from './classes'
import { } from './helpers'
import { } from './components'
import { goTo, router } from "./helpers"

export default function app() {
  window.onpopstate = () => {
    router()
  }
  router()
  goTo(location.pathname)
  window.goTo = goTo
}