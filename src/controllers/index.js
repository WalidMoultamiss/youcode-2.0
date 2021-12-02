import { back } from "../helpers";
import { header } from "../components";
import { ref } from "../Mout";
import { goTo, router, UserObj, QuestionObj, render } from "../helpers";

class Controller {
    constructor() {
        window._ = this
        router();

        //Our Global Router Link
        window.goTo = goTo;
        window.clearAllTimeOutes = this.clearAllTimeOutes;


        //login onload
        this.loginOnload()

        //render Header components
        this.updateHeader();

        //Listener on navigator go back
        back();

        //Handle routing system on load
        goTo(location.pathname);

        QuestionObj.getQuestions()

    }

    loginOnload = async () => {
        console.log("first load", location.pathname);
        let email = localStorage.getItem("email");
        let password = localStorage.getItem("password")
        if (email, password) {
            let res = await this.login({ email, password })
            if (!res) this.logout()
            this.handlePage(location.pathname.split('/').join(''))
        } else {
            this.logout()
            goTo('register')
        }
    }
    handlePage = async (path) => {
        let res = ref.find(elm => elm.path == path)
        res ? res.func(true) : goTo(`/${path}`)
    }

    viewResStat = () => {
        return UserObj.user
    }

    isAuth = () => {
        return UserObj.user
    }




    Questions = () => {
        return QuestionObj.questions
    }

    validateQuestion = (question) => {
        return QuestionObj.validateQuestion(question)
    }
    getResultTestOnline = () => {
        return QuestionObj.getResultTestOnline()
    }

    setQuestion = async (question) => {
        return QuestionObj.setQuestion(question)
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

    clearAllTimeOutes = () => {
        let id = window.setTimeout(() => { }, 0);
        while (id--) {
            window.clearTimeout(id);
        };
    };
}

export default Controller;
