export const UserDashboard = (users) => {

    const List = (dataUsers) => {
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
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Accepted
                    </span>
                </td>
            </tr>
            `));
        }, "");
        return html

    }

    return (`
        <div class="w-full flex flex-wrap justify-center items-center overflow-scroll dark:bg-gray-700">
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
        <div class="w-full flex flex-wrap justify-center items-center overflow-scroll dark:bg-gray-700 ">
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