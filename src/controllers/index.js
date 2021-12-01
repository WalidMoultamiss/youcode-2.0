import { back } from "../helpers";
import { header } from "../components";
import { goTo, router, UserObj, render } from "../helpers";

class Controller {
  constructor() {
      //render Header components
    this.updateHeader();

    //Listener on navigator go back
    back();

    //Handle routing system on load
    router();
    goTo(location.pathname);

    //Our Global Router Link
    window.goTo = goTo;
  }

  view = (page, data) => {
    render(page, data);
  };

  addUser = async (UserData) => {
    let user = await UserObj.instription(UserData);
    this.updateHeader();
    localStorage.setItem("email", user.email);
    localStorage.setItem("password", user.password);
    return user;
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
