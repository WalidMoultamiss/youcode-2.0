import { get, put, post, UserObj } from "../helpers";

export class QuestionClass {
  questions = [];
  question;

  getQuestions = async () => {
    const questions = await get("/questions");
    this.questions = questions;
    return questions;
  };

  getResultTestOnline = async () => {
    const email = UserObj.user.email;
    let user = await get(`/schema/?email=${email}`);
    user = user[0];
    UserObj.user.status = 'accepted';
    let test = [];
    if (user.testOnline.length > 0) {
      test = user.testOnline.find(item => item.isCorrect == false)
    }
    UserObj.user.testOnline = user.testOnline;
    UserObj.user.status = test?.length === 0 ? 'pending' : test ? 'rejected' :  'accepted';
    await put(`/schema/${UserObj.user.id}`, UserObj.user);
    console.log(UserObj.user.status);
    return UserObj.user.status;
  };


  setQuestion = async (question) => {
    const res = await this.validateQuestion(question)
    const email = UserObj.user.email;
    let user = await get(`/schema/?email=${email}`);
    user = user[0];
    let result = { error: "already answered" };
    if (user?.testOnline.length < 5) {
      user.testOnline = [...user.testOnline, res];
      result = await put(`/schema/${user.id}`, user);
    }
    return result;
  };

  validateQuestion = async (question) => {
    const qst = await get(`/questions/${question.id}`);
    return {
      id: qst.id,
      answer: question.answer[0],
      isCorrect: qst.answer === question.answer[0],
      correct: qst.answer,
    };
  };
}

export default QuestionClass;
