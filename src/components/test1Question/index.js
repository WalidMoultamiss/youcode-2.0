//import controller
import Controller from '../../controllers';


export const test1Question =  () => {
    
    const questions = _.getQuestions();
    console.log(questions);
    return `
       ${
        questions.forEach(element => {
            `
            <div class="question">
                <div class="question-title">
                    <h3>${element.email}</h3>
                </div>
            </div>
            `
        })
       }
    `
}