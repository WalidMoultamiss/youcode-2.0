
import { get, put, post } from '../helpers'

export class QuestionClass {

    questions = []
    question


    getQuestions = async () => {
        const questions = await get('/questions')
        this.questions = questions
        return questions
    }
}


export default QuestionClass

