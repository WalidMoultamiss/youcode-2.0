//import controller
import Controller from '../../controllers';


export const test1Question =async () => {
    let __ = new Controller();
    const questions = await __.getQuestions();
    console.log(questions);
    return `
        <h1 >Test 1 Question</h1>
    `
}