export const viewRes = () => {

    const getRes = ()=>{
        const res =  _.viewResStat()
        const status = res.status
        const questions = res.testOnline
        console.log(questions);
        return {
            status:()=> status,
            questions:()=> questions[0],
        }
    }

    // const renderQuestions = ()=>{
    //     const questions = getRes()




    return `
    <div class="w-full h-screen pt-44 dark:bg-gray-900">
        <h1 class="dark:text-white">
            ${getRes().status()}
        </h1>
        <h2 class="dark:text-white">
        ${getRes().questions().isCorrect}
        </h2>
    </div>
    `
}