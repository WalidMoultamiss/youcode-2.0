import { get, put, post, UserObj, patch } from "../helpers";

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
    
    UserObj.user.status = 'review';
    let test = [];
    if (user.testOnline.length > 0) {
      test = user.testOnline.find(item => item.isCorrect == false)
    }
    UserObj.user.testOnline = user.testOnline;
    UserObj.user.status = test?.length === 0 ? 'pending' : test ? 'rejected' : 'review';
    await patch(`/schema/${UserObj.user.id}`, { status: UserObj.user.status });
    console.log(UserObj.user.status);
    return UserObj.user.status;
  };

  setSeriousGame = async (answer) => {
    const email = UserObj.user.email;
    let user = await get(`/schema/?email=${email}`);
    user = user[0];
    user.seriousGame = answer
    const result = await put(`/schema/${user.id}`, user);
    return result;
  }
  setTestTechnique = async (answer) => {
    const email = UserObj.user.email;
    let user = await get(`/schema/?email=${email}`);
    user = user[0];
    user.technique = answer
    const result = await put(`/schema/${user.id}`, user);
    return result;
  }


  setMotivation = async (answer) => {
    const email = UserObj.user.email;
    let user = await get(`/schema/?email=${email}`);
    user = user[0];
    user.motivation = answer
    const result = await put(`/schema/${user.id}`, user);
    return result;
  }


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
