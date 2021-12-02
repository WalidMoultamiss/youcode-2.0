import { UserObj, QuestionObj } from "../helpers"

export const TestOnline = async () => {
    await QuestionObj.getQuestions()
    goTo('/online')
};

export const AdminPage = async (switcher) => {
    console.log("from mouter :",switcher);
    await QuestionObj.getQuestions()
    await UserObj.getUsers()
    goTo('/admin', { users: UserObj.users, questions: QuestionObj.questions ,switcher})
};



export const ref = [
    {
        path: "online",
        func: TestOnline
    },
    {
        path: "admin",
        func: AdminPage
    }
]