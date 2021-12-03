import { download } from "../../helpers"

export const UserDashboard = (users) => {

    window.downloadFile = (id)=>{
        const user = users.find(user => user.id == id)
        download(user)
    }

    const List = (dataUsers) => {
        const colors = {
            accepted: "bg-green-100 text-green-800",
            pending: "bg-gray-100 text-gray-800",
            rejected: "bg-pink-100 text-pink-800",
            review: "bg-purple-100 text-purple-800",
        }


        window.checkUserAnswers = (id) => {
            let user = dataUsers.find(user => user.id == id)
            console.log(user);
            goTo('viewres', user)
        }

        const html = dataUsers?.reduce((output, user, id) => {

            return (output += (`
            <tr>
                <td class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 text-left px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
                    ${user.id}
                </td>
                <td class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 text-left px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
                    ${user.cin}
                </td>
                <td class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 text-left px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
                    ${user.fullName}
                </td>
                <td class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 text-left px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
                    ${user.email}
                </td>
                <td class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 text-left px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
                    ${user.telephone}
                </td>
                <td class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 text-left px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
                    ${user.dateOfBirth}
                </td>
                
                <td class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 text-gray-500">
                    <span class=" px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colors[user.status]} ">
                        ${user.status}
                    </span>
                </td>
                <td onclick="checkUserAnswers(${user.id})" class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 border-b border-gray-200 bg-white text-sm leading-5 text-gray-500 cursor-pointer">
                    <span class="p-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-300 text-black">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </span>
                </td>
                <td onclick="downloadFile(${user.id})" class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 border-b border-gray-200 bg-white text-sm leading-5 text-gray-500 cursor-pointer">
                    <span class="p-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-300 text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                        class="feather feather-download px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-300 text-black">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4">
                        </path>
                        <polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3">
                        </line>
                    </svg>
                    </span>
                </td>
            </tr>
            `));
        }, "");
        return html

    }

    return (`
        <div class="w-full flex flex-wrap justify-center items-center overflow-scroll ">
                <div class="w-[80%] p-3 ">
                    <div class=" bg-white dark:bg-gray-800 dark:text-white dark:border-gray-300  border-t border-b sm:border-l sm:border-r sm:rounded shadow">
                        <div class="border-b p-3 dark:bg-gray-700 dark:text-white">
                            <h5 class="mb-0">List of Users</h5>
                        </div>
                        <div class="p-5">
                            <table class="w-full whitespace-no-wrap">
                                <thead>
                                    <tr>
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            ID #
                                        </th>
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            CIN
                                        </th>
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            FULL NAME
                                        </th>
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            EMAIL
                                        </th>
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            PHONE
                                        </th>
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            BIRTHDAY
                                        </th>
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            check
                                        </th>
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            download
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${List(users)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>        
    `);
}




export const QuestionDashboard = (questions) => {

    const List = (dataQuestions) => {
        const html = dataQuestions?.reduce((output, question, id) => {

            return (output += (`
            <tr>
                <td class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 text-left px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
                    ${question.id}
                </td>
                <td class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 text-left px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
                    ${question.question}
                </td>
                <td class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 text-left px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
                    ${question.answer}
                </td>
                <td class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 text-left px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
                    ${question.category}
                </td>
                <td class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 text-left px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
                    ${question.difficulty}
                </td>
                  <td class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 text-left px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
                    ${question.incorrect_answers.join(', ')}
                </td>
                
                <td class=" dark:border-gray-300 dark:text-white dark:bg-gray-900 px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 text-gray-500">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Live
                    </span>
                </td>
            </tr>
            `));
        }, "");
        return html

    }

    return (`
        <div class="w-full flex flex-wrap justify-center items-center overflow-scroll">
                <div class="w-[80%] p-3 ">
                    <div class=" bg-white dark:bg-gray-800 dark:text-white dark:border-gray-300  border-t border-b sm:border-l sm:border-r sm:rounded shadow ">
                        <div class="border-b p-3 dark:bg-gray-700 dark:text-white">
                            <h5 class="mb-0">List of Users</h5>
                        </div>
                        <div class="p-5">
                            <table class="w-full whitespace-no-wrap" >
                                <thead >
                                    <tr >
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            ID #
                                        </th>
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            QUESTION
                                        </th>
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            ANSWER
                                        </th>
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            CATEGORY
                                        </th>
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            DIFFICULTY
                                        </th>
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            INCORRECT ANSWERS
                                        </th>
                                        <th class=" dark:text-white dark:bg-gray-700 px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="dark:bg-gray-900">
                                    ${List(questions)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>        
    `);
}