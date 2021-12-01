import { goTo } from "../../helpers";

export const header = (data) => {
  let user = data;

  //onclick toggle drak mode tailwind
  window.toggleDarkMode = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
  };

  //logout remove email and password from local storage
  window.logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    goTo("/");
  };

  window.isLoggedIn = () => {
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
      return true;
    } else {
      return false;
    }
  };

  return `
        <div class="header">
            <nav id="nav" class="flex items-center justify-between flex-wrap dark:bg-red-900 bg-red-500 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
                    <span class="font-semibold text-xl tracking-tight">Youcode</span>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <span onclick="goTo('home')" class="block cursor-pointer dark:text-gray-100 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Home
                        </span>
                        <span onclick="goTo('about')" class="block mt-4 cursor-pointer dark:text-gray-100 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            About
                        </span>
                    </div>
                    <div class="flex justify-center">
                        
                    
                        <div class="flex gap-4 items-center">
                            <div class="text-sm">
                                <p class="text-white uppercase text-sm font-semibold ">${
                                  user ? user[0].fullName : null
                                }</p>
                            </div>
                            <img class="w-10 h-10 rounded-full mr-4" src="https://picsum.photos/200/300" alt="Avatar of Youcode user">
                            <button onclick="toggleDarkMode()" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                                dark
                            </button>
                            <div>
                                <button onclick="goTo('/login')" class="${isLoggedIn() ? 'inline-block' :'hidden'}  text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">login</button>
                                <button onclick="logout()" class=" ${!isLoggedIn() ? 'inline-block' :'hidden'}  text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</button>
                            </div>
                        </div>
        </div>
    `;
};
