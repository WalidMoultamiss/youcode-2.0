import pages from '../pages'
import { router, render } from './'

export const goTo = (path) => {
    history.pushState({ usreid: 3 }, path, "/?page=" + path)
    router()
    let page = pages.find(page => {
        let checker = path === "/" ? path : path.replace('/', "")
        return page?.path.toLowerCase() === checker
    })
    render(page)
}