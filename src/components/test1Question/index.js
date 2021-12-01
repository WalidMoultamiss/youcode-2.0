//import controller
import Controller from '../../controllers';


export const test1Question = async (questions) => {
    console.log(questions);
    let html = await questions.map(element => (`<h3>${element.question}</h3>`)).join('')
    console.log(html);
    if (questions) questions.map(element => (`<h3>${element.question}</h3>`)).join('')
    return "no"
}