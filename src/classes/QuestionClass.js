
import { get, put, post } from '../helpers'

export class QuestionClass {

    questions = []
    question


    getQuestions = async () => {
        const questions = await get('/questions')
        this.questions = questions
        return questions
    }

    setQuestion = async (email,question) => {
        const qst = put(`/schema?email=${email}`, question)
        this.question = qst
        return qst
    }



    validateQuestion = async (question) => {
        const qst = await get(`/questions/${question.id}`)
        console.log(qst);
        if (qst.answer === question.answer[0]) {
            return true
        } else {
            return {
                error: 'Wrong answer',
                correct: qst.answer
            }
        }
    }

}


export default QuestionClass

