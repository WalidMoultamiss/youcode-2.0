import { goTo } from "../../helpers";
import { AdminPage } from "../../Mout";

export const header = (data) => {
    let user = data;

    //onclick toggle drak mode tailwind
    window.toggleDarkMode = () => {
        const body = document.querySelector("body");
        body.classList.toggle("dark");
    };

    //logout remove email and password from local storage
    window.logout = () => {
        _.logout()
        goTo("/");
    };


    window.navigate = (type, where) => {
        console.log(type, where);
        window.clearAllTimeOutes()
        type === 'link' ? goTo(where) : AdminPage()
    }

    window.isLoggedIn = () => {
        if (localStorage.getItem("email") && localStorage.getItem("password")) {
            return true;
        } else {
            return false;
        }
    };

    window.isAdmin = () => {
        return user.role === "admin" ? (`
                <svg onclick="navigate('admin','admin')" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                    stroke-linejoin="round" class="feather feather-settings
                        feather feather-moon p-2 leading-none border 
                        rounded text-white border-white hover:border-transparent 
                        hover:text-black hover:bg-white cursor-pointer
                    ">
                    <circle cx="12" cy="12" r="3">
                    </circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                    </path>
                </svg>
         `) : ""
    }

    return `
        <div class="header fixed top-0 z-50 w-full">
            <nav id="nav" class="flex items-center justify-between flex-wrap dark:bg-red-900 bg-red-500 p-6">
                <div onclick="navigate('link','/')" class="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
                    <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
                    <span class="font-semibold text-xl tracking-tight rounded-l-md border-2 border-r-0 p-2">YOUCODE</span><span class=" bg-white text-xl text-black rounded-r-md border-l-0 border-2 p-2">2.0</span>
                </div>
                <div class="block lg:hidden">
                    <button  class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow ">
                        
                    </div>
                    <div class="flex justify-center">
                        <div class="flex gap-4 items-center">
                            <div class="text-sm ${isLoggedIn() ? 'inline-block' : 'hidden'}">
                                <p class="text-white uppercase text-sm font-semibold ">${user.fullName}</p>
                            </div>
                            <img class="w-10 h-10 rounded-full mr-4 ${isLoggedIn() ? 'inline-block' : 'hidden'}" src="https://picsum.photos/200/300" alt="Avatar of Youcode user">
                            ${isAdmin()}
                            <svg onclick="toggleDarkMode()" xmlns="http://www.w3.org/2000/svg" width="32" height="32" 
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                class="feather feather-moon p-2 leading-none border 
                                rounded text-white border-white hover:border-transparent 
                                hover:text-black hover:bg-white cursor-pointer">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z">
                                </path>
                            </svg>
                            <div>
                                <button onclick="goTo('/login')"  class="${!isLoggedIn() ? 'inline-block' : 'hidden'}  text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0">login</button>
                                <svg onclick="logout()" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                    class="${!isLoggedIn() ? 'hidden' : 'inline-block'} feather feather-log-out p-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white cursor-pointer "><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4">
                                    </path>
                                    <polyline points="16 17 21 12 16 7"></polyline>
                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                </svg>
                                <!-- <button    text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</button> -->
                                <!-- <button onclick="test().reset()" class=" text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Reset</button> -->
                            </div>
                        </div>

        </div>
    `;
};
