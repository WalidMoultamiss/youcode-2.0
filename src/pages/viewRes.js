export const viewRes = (user) => {

    const getRes = () => {
        const res = _.viewResStat()
        const status = res.status
        const questions = res.testOnline
        console.log(questions);
        if (res) {
            return {
                status: () => status?.toUpperCase(),
                questions: () => questions,
            }
        }
    }

    const renderQuestions = () => {
        const questions = user.testOnline ? user.testOnline : getRes().questions()
        console.log(user);
        return questions && questions.map((question, index) => {
            return (`
                <div class="w-96 p-3 rounded-lg dark:bg-gray-700 bg-red-50 border-2 ${question.isCorrect ? 'border-green-500' : 'border-red-500'}" key=${index}>
                    <div class="text-left">
                        <h3 class="font-bold">Question ${index + 1}:</h3>
                    </div>
                    <div class="flex flex-col text-left">
                        <p>The correct answer is:<b> ${question.correct}</b></p>
                        <p>Your answer is: <b>${question.answer}</b></p>
                    </div>
                </div>`
            )
        }).join('')
    }



    return `
    <div class="w-full flex flex-col gap-4 h-screen pt-44 overflow-y-scroll py-11 dark:bg-gray-900">
        <h1 class="dark:text-white">
            Bro, You have been <b>${user.testOnline? user.status : getRes().status()}</b>
        </h1>
        <div class="dark:text-white flex flex-col gap-3  justify-center items-center">
        ${renderQuestions()}
        </div>
    </div>
    `
}