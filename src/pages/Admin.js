import { QuestionDashboard, UserDashboard } from "../components/dashboard";
import { AdminPage } from "../Mout";

export const Admin = ({ users, questions, switcher }) => {
  window.swicthMe = (newState) => {
    console.log(newState);
    AdminPage(newState);
  };

  return ` 
        <div class="h-screen dark:bg-gray-900">
            <div class="flex flex-col h-full pt-28">
                <div class=" w-full  flex justify-center items-center dark:text-white dark:border-gray-300">
                    <div class="flex gap-3">
                        <button onclick="swicthMe(true)" class="w-32 min-w-32 text-sm px-4 py-2 leading-none border rounded text-black border-black dark:text-white dark:border-white hover:border-transparent hover:text-teal-500 dark:hover:text-black hover:bg-white mt-4 lg:mt-0" onclick="">Users</button>
                        <button onclick="swicthMe(false)" class="w-32 min-w-32 text-sm px-4 py-2 leading-none border rounded text-black border-black dark:text-white dark:border-white hover:border-transparent hover:text-teal-500 dark:hover:text-black hover:bg-white mt-4 lg:mt-0">Questions</button>
                    </div>
                </div>
                <div class="h-full flex justify-center" id="dashboard">
                    ${
                    switcher ? UserDashboard(users) : QuestionDashboard(questions)
                    }
                </div>
            </div>
        </div>
    `;
};
