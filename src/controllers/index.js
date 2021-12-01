import { back } from "../helpers";
import { header } from "../components";
import { goTo, router, UserObj, QuestionObj, render } from "../helpers";

class Controller {
    constructor() {

        window._ = this

        //login onload
        this.loginOnload()

        //render Header components
        this.updateHeader();

        //Listener on navigator go back
        back();

        //Handle routing system on load
        router();
        goTo(location.pathname);

        QuestionObj.getQuestions()

        //get Data 


        //Our Global Router Link
        window.goTo = goTo;

    }

    loginOnload = async () => {
        let email = localStorage.getItem("email");
        let password = localStorage.getItem("password")
        if (email, password) {
            console.log("in");
            let res = await this.login({ email, password })
            if (!res) this.logout()
        } else {
            this.logout()
        }
    }

    view = async () => {
        await QuestionObj.getQuestions()
        goTo('/alloo')
    };

    Questions = () => {
        return QuestionObj.questions

    }

    addUser = async (UserData) => {
        let user = await UserObj.instription(UserData);
        this.updateHeader();
        localStorage.setItem("email", user.email);
        localStorage.setItem("password", user.password);
        return user;
    };

    logout = () => {
        UserObj.user = {}
        this.updateHeader()
        localStorage.removeItem("email");
        localStorage.removeItem("password");
    };



    //login
    login = async (UserData) => {
        let user = await UserObj.getUserByEmail(UserData.email);
        if (user.length > 0) {
            if (user[0].password === UserData.password) {
                UserObj.user = user[0];
                this.updateHeader();
                localStorage.setItem("email", user[0].email);
                localStorage.setItem("password", user[0].password);
                return user[0];
            } else {
                return false;
            }

        }
    };

    updateHeader = async () => {
        await UserObj.getUsers();
        render(
            {
                path: "header",
                page: header,
            },
            UserObj.user
        );
    };
}

export default Controller;
