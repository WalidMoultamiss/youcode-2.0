import './style.css'
import "tailwindcss/tailwind.css"
import { render, router } from "./src/helpers"
import { pages } from './src'

console.log(pages);
// router()


const goTo = (path) => {
    history.pushState({ usreid: 3 }, path, "/?page=" + path)
    router()
    let page = pages.find(page => page.path.toLowerCase() === path)
    console.log(pages);
    render(page)
}

window.goTo = goTo




