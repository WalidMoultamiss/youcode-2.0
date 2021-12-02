export const viewRes = (user) => {

    const getRes = () => {
        const res = _.viewResStat()
        const status = res?.status
        const questions = res?.testOnline
        if (res) {
            return {
                status: () => status?.toUpperCase(),
                questions: () => questions,
            }
        }
    }

    const renderQuestions = () => {
        const questions = user.testOnline ? user.testOnline : getRes()?.questions()
        console.log(user);
        return questions && questions.map((question, index) => {
            return (`
            <div class="flex gap-3">
                <div class="flex flex-col items-center">
                    <div class="px-3 py-1 flex justify-center items-center rounded-full ${question.isCorrect ? 'bg-green-500' : 'bg-red-500'}">${index + 1}</div>
                    ${index != 4 ? '<div class="w-0.5 bg-gray-400 h-full"></div>' : ''}
                </div>
                <div class="w-96 p-3 mb-3 rounded-lg dark:bg-gray-700 bg-red-50 border-2 ${question.isCorrect ? 'border-green-500' : 'border-red-500'}" key=${index}>
                    <div class="text-left">
                        <h3 class="font-bold">Question ${index + 1}:</h3>
                    </div>
                    <div class="flex flex-col text-left">
                        <p>The correct answer is:<b> ${question.correct}</b></p>
                        ${question.answer ? ('<p>Your answer is: <b>' + question.answer + '</b></p>') : '<p><b>You did not answer this question 😥</b></p>'}
                    </div>
                </div>
            </div>
            `)
        }).join('')
    }



    return `
    <div class="w-full flex flex-col gap-4 h-screen pt-44 overflow-y-scroll py-11 dark:bg-gray-900">
        <h1 class="dark:text-white">
            Bro, You have been <b>${user.testOnline ? user.status : getRes()?.status()}</b>
        </h1>
        <div class="flex flex-col items-center">
            <div class="w-1/12 flex justify-center items-center">
                <button class="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg" onclick="goTo('seriousgame')">
                    Go to next exam
                </button>
            </div>
        </div>
        <div class="dark:text-white flex flex-col justify-center items-center">
        ${renderQuestions()}
        </div>
    </div>
    `
}