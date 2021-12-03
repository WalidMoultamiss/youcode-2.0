import { btn } from "../components";

export const viewRes = (user) => {
  window.$ = (selector) => document.querySelector(selector);

  window.preInscription = () => {
    $("#preInscription").style.display = "block";
    $("#online").style.display = "none";
  };
  window.hundelOnline = () => {
    $("#online").style.display = "block";
    $("#preInscription").style.display = "none";
  };

  const getRes = () => {
    const res = _.viewResStat();
    const status = res?.status;
    const questions = res?.testOnline;
    if (res) {
      return {
        status: () => status?.toUpperCase(),
        questions: () => questions,
        fullName: () => res.fullName,
        seriousGame: () => res.seriousGame,
        motivation: () => res.motivation,
        technique: () => res.technique,
      };
    }
  };
  console.log(getRes().fullName());

  const renderSeriousGame = () => {
    const seriousGame = getRes().seriousGame();
    return `
                <div style="width:428px;" class="mb-3 rounded-lg dark:bg-gray-700 bg-red-50 border-2 ">
                    <div class="flex flex-col text-left">
                        <p class="p-3"><b>Serious game:</b></p>
                        <hr/>
                        <textarea class=" dark:bg-gray-700 h-32 p-3 dark:text-white max-w-full">${seriousGame}</textarea>
                    </div>
                </div>
            `;
  };

  const renderTechnique = () => {
    const technique = getRes().technique();
    return `
            <div style="width:428px;" class="mb-3 rounded-lg dark:bg-gray-700 bg-red-50 border-2 ">
                <div class="flex w-full flex-col text-left">
                    <p class="p-3"><b>Test technique:</b></p>
                    <hr />
                    <h2 class="dark:text-white px-3">
                    Create a function that sort the array [1,12,54,3,9] descending using ${technique.lang}:
                    </h2>
                    <div class="p-3 w-full">
                    <div class="py-2 w-full px-2 rounded-md  flex flex-col bg-gray-900">
                        <div class="w-full flex mb-1 items-center justify-between">
                            <div class="flex gap-3 justify-start">
                                <div
                                style="background-image:url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png');"
                                class="bg-center bg-cover w-4 h-4"></div>
                                <span class="dark:text-white text-sm cursor-pointer">
                                    File
                                </span>
                                <span class="dark:text-white text-sm cursor-pointer">
                                    Edit
                                </span>
                                <span class="dark:text-white text-sm cursor-pointer">
                                    Selection
                                </span>
                            </div>
                            <div class="w-full justify-end flex">
                                <span class="cursor-pointer px-1 text-xs text-right rounded-md border-2">Copy</span>
                            </div>
                        <div>
                        </div>
                        </div>
                        <textarea id="script" autofocus style="font-family: monospace;"
                        class="dark:bg-gray-800 dark:text-white w-full h-48 rounded-md p-3 outline-none ">${technique.script}</textarea>
                    </div>
                    </div>
                </div>
            </div>
            `;
  };
  const renderMotivation = () => {
    const motivations = getRes().motivation();
    let html = [];
    motivations.map((motivation, idx) => {
      html.push(`
        <div class="p-3 w-full">
            <p><b>Question ${idx + 1}:</b></p>
            <textarea class="dark:bg-gray-700 outline-none w-full h-20 p-3 dark:text-white max-w-full">${
              motivation.text
            }</textarea>
        </div>
        `);
    });
    return html.join("<hr/>");
  };

  const renderQuestions = () => {
    const questions = user.testOnline ? user.testOnline : getRes()?.questions();
    console.log(user);
    return (
      questions &&
      questions
        .map((question, index) => {
          return `
            <div class="flex gap-3">
                <div class="flex flex-col items-center">
                    <div class="px-3 py-1 flex justify-center items-center rounded-full ${
                      question.isCorrect ? "bg-green-500" : "bg-red-500"
                    }">${index + 1}</div>
                    ${
                      index != 4
                        ? '<div class="w-0.5 bg-gray-400 h-full"></div>'
                        : ""
                    }
                </div>
                <div class="w-96 p-3 mb-3 rounded-lg dark:bg-gray-700 bg-red-50 border-2 ${
                  question.isCorrect ? "border-green-500" : "border-red-500"
                }" key=${index}>
                    <div class="text-left">
                        <h3 class="font-bold">Question ${index + 1}:</h3>
                    </div>
                    <div class="flex flex-col text-left">
                        <p>The correct answer is:<b> ${question.correct}</b></p>
                        ${
                          question.answer
                            ? "<p>Your answer is: <b>" +
                              question.answer +
                              "</b></p>"
                            : "<p><b>You did not answer this question 😥</b></p>"
                        }
                    </div>
                </div>
            </div>
            `;
        })
        .join("")
    );
  };

  return `
    <div class="w-full flex flex-col gap-4 h-screen pt-44 overflow-y-scroll py-11 dark:bg-gray-900">
        <h1 class="dark:text-white">
            ${
              user.testOnline ? user.fullName : getRes()?.fullName()
            }, You have been <b>${
    user.testOnline ? user.status : getRes()?.status()
  }</b>
        </h1>
        <div class="flex flex-col items-center">
            <div class="w-1/12 flex justify-center items-center ${
              user.testOnline
                ? user.status == "rejected" || _.isAuth()?.role == "admin"
                  ? "hidden"
                  : ""
                : getRes()?.status() == "rejected".toUpperCase() ||
                  _.isAuth()?.role == "admin"
                ? "hidden"
                : ""
            } ">
                <button class="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg" onclick="goTo('seriousgame')">
                    Go to next exam
                </button>
            </div>
        </div>
        <div class="flex w-full gap-3 justify-center">
                <button class="bg-green-500 text-white font-bold py-2 px-4 rounded-lg" onclick=" hundelOnline() ">
                    Test online
                </button>
                <button class=" bg-green-500 text-white font-bold py-2 px-4 rounded-lg" onclick="preInscription()" >
                    Test pre-admission
                </button>
        </div>
        <div class="dark:text-white flex flex-col justify-center items-center">
            <div id="online" style="display:block;" >
                ${renderQuestions()}
            </div>
            <div id="preInscription" style="display:none;" >
                ${renderSeriousGame()}
                <div style="width:428px;" class="mb-3 rounded-lg dark:bg-gray-700 bg-red-50 border-2 ">
                    <div class="flex flex-col text-left">
                        <p class="p-3"><b>Serious game:</b></p>
                        <hr/>
                    ${renderMotivation()}
                    </div>
                </div>
                ${renderTechnique()}
                <div style="width:428px;" class="flex justify-end gap-3">
                    <div>
                        ${btn('Refuse','bg-red-500 p-2 rounded-lg text-white')}
                    </div>
                    <div>
                        ${btn('Accept','bg-green-500 p-2 text-white rounded-lg')}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
};
