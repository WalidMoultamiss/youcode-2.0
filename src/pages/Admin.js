import { QuestionDashboard, UserDashboard } from "../components/dashboard"
import { AdminPage } from "../Mout"


export const Admin = ({ users, questions, switcher }) => {

    window.swicthMe = (newState) => {
        console.log(newState);
        AdminPage(newState)
    }

    return (` 
        <div class="mt-10 w-full flex justify-center">
            <div class="flex gap-3">
                <button onclick="swicthMe(true)" class="w-32 min-w-32 text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" onclick="">Users</button>
                <button onclick="swicthMe(false)" class="w-32 min-w-32 text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Questions</button>
            </div>
        </div>
        <div class="flex justify-center" id="dashboard">
            ${switcher ? UserDashboard(users) : QuestionDashboard(questions)}
        </div>
    `)
}

