import pages from '../pages'
import { router, render } from './'

export const goTo = (path, data = []) => {
    let auth = _.isAuth()
    console.log("from auth", auth);
    history.pushState({ usreid: 3 }, path, "/?page=" + path)
    router()
    const authPage = pages.find(page => page?.path === "register")
    let page = pages.find(page => {
        let checker = path === "/" ? path : path.replace('/', "")
        return page?.path.toLowerCase() === checker
    })
    if (page.auth && !auth) {
        history.pushState( path, "/?page=" + page.path)
        render(authPage, data)
    }
    else render(page, data)

}