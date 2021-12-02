import pages from '../pages'
import { router, render } from './'

export const goTo = async (path, data = []) => {
    const authPage = pages.find(page => page?.path === "register")
    let auth = await _.isAuth()
    history.pushState({ usreid: 3 }, path, "/?page=" + path)
    router()
    let page = pages.find(page => {
        let checker = path === "/" ? path : path.replace('/', "")
        return page?.path.toLowerCase() === checker
    })
    if (page.auth && !auth.email) {
        history.pushState({ usreid: 3 }, path, "/?page=" + page.path)
        router()
        render(authPage, data)
    } else {
        render(page, data)
    }

}