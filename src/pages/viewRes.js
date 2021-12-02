export const viewRes = () => {

    const getRes = ()=>{
        const res =  _.viewResStat()
        const status = res.status
        const questions = res.testOnline
        console.log(questions);
        return res.status
    }



    return `
    <div class="w-full h-screen pt-44 dark:bg-gray-900">
        <h1 class="dark:text-white">
            ${getRes()}
        </h1>
    </div>
    `
}