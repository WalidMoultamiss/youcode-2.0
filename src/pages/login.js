export const login = () => {
  //get info from local storage
  const user = {
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password"),
  };

  return `
        <div class="flex dark:bg-gray-900 flex-col items-center justify-center h-screen">
            <div class="bg-white dark:bg-gray-700 shadow-lg rounded-lg ">
                <div class="w-full p-3">
                    <div class="flex justify-start gap-3 items-center">
                        <div class="p-2 rounded-full cursor-pointer bg-red-600"></div>
                        <div class="p-2 rounded-full cursor-pointer bg-yellow-400"></div>
                        <div class="p-2 rounded-full cursor-pointer bg-green-400" ></div>
                        <input type="text" class="w-full bg-gray-200 outline-none p-1 text-xs px-3 rounded-lg" id="url" placeholder="url" value="https://www.youcode2.ma">
                    </div>
                </div>
                <hr/>
            <div class="px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <h1 class="text-2xl font-bold dark:text-white text-center">Login</h1>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 dark:text-white text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="shadow appearance-none dark:bg-gray-600 border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" value="${user.email}">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 dark:text-white text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border dark:bg-gray-600 border-red-500 rounded w-full py-2 px-3 text-gray-700 dark:text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" value="${user.password}" type="password" placeholder="******************">
                    <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Login
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
                </div>
            </div>
        </div>
      `;
};
