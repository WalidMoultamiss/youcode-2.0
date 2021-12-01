import { UserObj, QuestionObj } from "../helpers"

export const TestOnline = async () => {
    await QuestionObj.getQuestions()
    goTo('/online')
};