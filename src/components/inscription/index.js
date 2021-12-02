//import btn
import { btn, popup } from "../../components";
import { get, goTo, post } from "../../helpers";

export const inscription = () => {
  const form = document.querySelector("#form");
  const btnSubmit = document.querySelector("#btnSubmit");
  const btnReset = document.querySelector("#btnReset");
  const btnClose = document.querySelector("#btnClose");

  //check IF EMAIL is not register
  window.checkEmail = async () => {
    const email = document.querySelector("#email");
    const emailValue = email.value;
    const response = await get("/schema?email=" + emailValue);


    if (response.length > 0) {
      console.log("email exist");
      document.querySelector("#inscr-popup").style.display = "flex";
    } else {
      addUser()
    }
  };

  //fetch add user
  const addUser = async () => {
    const email = document.querySelector("#email");
    const fullname = document.querySelector("#fullName");
    const cin = document.querySelector("#cin");
    const telephone = document.querySelector("#telephone");
    //random password with 8 characters
    const password = Math.random().toString(36).slice(-8).toUpperCase();

    //test if all fields are filled
    if (
      email.value !== "" &&
      fullname.value !== "" &&
      cin.value !== "" &&
      telephone.value !== ""
    ) {
      let userData = {
        email: email.value,
        fullName: fullname.value,
        cin: cin.value,
        telephone: telephone.value,
        password: password,
      }
      const response = await _.addUser(userData)
      email.value = "";
      fullname.value = "";
      cin.value = "";
      telephone.value = "";
      console.log(response);
      document.querySelector("#popup_submited").style.display = "flex";
      //save email and password in localStorage
      goTo("/login");
      console.log("email not exist");
      return true;
    } else {
      document.querySelector("#popup_error").style.display = "flex";
      return false;
    }
  };

  window.allo = () =>
    document.querySelector("#emailAdress").addEventListener("click", () => {
      console.log("allo");
    });

  return `
            <div  class="w-full h-screen dark:bg-gray-900 flex justify-center items-center" id="inscr">
              <div>
                <div class="form-signup p-3 gap-3  bg-white dark:bg-gray-700 flex flex-col w-96 rounded-lg shadow-2xl transition-all  hover:shadow-md">
                  <div class="w-full">
                  <div class="flex justify-start gap-3 items-center">
                    <div class="p-2 rounded-full cursor-pointer bg-red-600"></div>
                    <div class="p-2 rounded-full cursor-pointer bg-yellow-400"></div>
                    <div class="p-2 rounded-full cursor-pointer bg-green-400" ></div>
                    <input type="text" class="w-full bg-gray-200 outline-none p-1 text-xs px-3 rounded-lg" id="url" placeholder="url" value="https://www.youcode2.ma">
                  </div>
                </div>
                <hr/>
                    <h1 class="h3 mb-3 dark:text-white font-bold">Inscription a youcode</h1>
                    <div class="flex flex-col items-start" id="full name" >
                        <label for="fullName" class="text-sm dark:text-white text-gray-700">Full name</label>
                        <input type="text" id="fullName" class="form-control p-2 shadow-md w-full rounded-md outline-none"  required autofocus>
                    </div>
                    <div class="flex flex-col items-start" id="emailAdress" >
                        <label for="email" class="text-sm dark:text-white text-gray-700">Email address</label>
                        <input type="email" id="email" class="form-control p-2 shadow-md w-full rounded-md outline-none"  required>
                    </div>
                    <div class="flex gap-3" >
                    <div class="flex w-1/3 flex-col items-start" id="emailAdress" >
                        <label for="cin" class="text-sm dark:text-white text-gray-700">CIN</label>
                        <input type="email" id="cin" class="form-control p-2 shadow-md w-full rounded-md outline-none"  required>
                    </div>
                    <div class="flex w-2/3 flex-col items-start" id="emailAdress" >
                        <label for="telephone" class="text-sm dark:text-white text-gray-700">Telephone</label>
                        <input  type="email" id="telephone" class="form-control p-2 shadow-md w-full rounded-md outline-none"  required>
                    </div>
                    </div>
                    <div class="w-full"  onclick="checkEmail()">
                        ${btn("sign in", "p-3 rounded-lg w-full")}
                    </div>
                    <p class="mt-5 dark:text-white mb-3 text-muted ">&copy; 2021-2022</p>
                </div>
                </div>
            </div>
            ${popup("user already registered", "inscr-popup")}
            ${popup("user created", "popup_submited")}
            ${popup("Please fill out the fields", "popup_error")}
            `;
};
