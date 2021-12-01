import { back } from '../helpers'
import { header } from '../components'
import { goTo, router, UserObj, render } from "../helpers"

class Controller {

    constructor() {
        this.updateHeader()
        //render Header components


        //Listener on navigator go back 
        back()

        //Handle routing system on load
        router()
        goTo(location.pathname)

        //Our Global Functions 
        window.goTo = goTo
    }

    view = (page, data) => {
        render(page, data)
    }

    addUser = async (UserData) => {
        let user = await UserObj.instription(UserData)
        this.updateHeader()
        localStorage.setItem('email', user.email)
        localStorage.setItem('password', user.password)
        return user
    }

    updateHeader = async () => {
        await UserObj.getUsers()
        render({
            path: "header",
            page: header
        }, UserObj.user)
    }

}

export default Controller;