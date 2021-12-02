import { TestOnline } from "../Mout";

export const online = () => {
  let data = _.Questions();

  //set the current test
  let testStep = localStorage.getItem("testStep")
    ? localStorage.getItem("testStep")
    : 0;
  window.test = () => {
    return {
      next: () => {
        testStep++;
        localStorage.setItem("testStep", testStep);
        TestOnline();
        return testStep;
      },
      current: () => {
        return testStep;
      },
      reset: () => {
        testStep = 0;
        localStorage.setItem("testStep", testStep);
        TestOnline();
        return testStep;
      },
      last: () => {
        testStep--;
        localStorage.setItem("testStep", testStep);
        TestOnline();
        return testStep;
      },
    };
  };

  let html = data
    .map((element, idx) => {
      const arr = [element.answer, ...element.incorrect_answers];

      //random arr elements
      const randomArr = arr.sort(() => 0.5 - Math.random());
      const randomChecks = randomArr.reduce((output, element, id) => {
        return (output += `
              <label  for="check_${id}_${idx}" class="form-check  w-2/5 flex gap-2 items-center p-3 rounded-lg transition-all transform hover:scale-105 cursor-pointer dark:bg-gray-600 bg-gray-100 shadow-md">
                <input id="check_${id}_${idx}" class="form-check-input checkbox" type="checkbox" value="${element}">
                <label for="check_${id}_${idx}" class="form-check-label cursor-pointer dark:text-white">
                  ${element}
                </label>
              </label>
      `);
      }, "");

      window.nextQuestion = async () => {
        let question = {
          id: +test().current() + 1,
          answer: [],
        };
        document.querySelectorAll(".checkbox").forEach((e) => {
          e.checked == true ? question.answer.push(e.value) : null;
        });
        let res = await _.validateQuestion(question);
        console.log(res);
        test().next();
      };

      if (test().current() == idx) {
        return `
      <style>
        #timing{
          width: 100%;
          height: 10px;
          background-color: #f5f5f5;
          animation: mymove 15s linear infinite;
        }

        @keyframes mymove {
          from {
            width: 100%;
            background-color: green;
          }
          to {
            width: 0%;
            background-color: red;
            }
          }
      </style>
        <div class="w-full flex-col flex h-screen items-center dark:bg-gray-900 justify-center">
          <div class="card bg-gray-100 gap-4 flex dark:bg-gray-700 p-3 w-2/5 rounded-lg shadow-md hover:scale-110  flex-col ">
            <div class="w-full bg-red-50 rounded-full">
                <div id="timing" class="rounded-full"></div>
            </div>
            <div class="card-header">
              <h2 class="dark:text-white text-left font-bold text-3xl">Question ${
                idx + 1
              }</h2>
              &nbsp;
              <h4 class="dark:text-white text-left font-bold text-lg">${
                element.question
              }</h4>
            </div>
            <div class="flex flex-wrap w-full justify-center gap-3">
              ${randomChecks}
            </div>
            <div class="flex w-full justify-end">
              <button onclick="nextQuestion()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
                Next
              </button>
            </div>
          </div>
        </div>
  `;
      } else if (test().current() > 4) {
        return `
        <div class="flex dark:bg-gray-900 flex-col items-center justify-center h-screen">
            <div class="bg-white dark:bg-gray-700 shadow-lg rounded-lg ">
                <div class="w-full p-3">
                    <div class="flex justify-start gap-3 items-center">
                        <div class="p-2 rounded-full cursor-pointer bg-red-600"></div>
                        <div class="p-2 rounded-full cursor-pointer bg-yellow-400"></div>
                        <div class="p-2 rounded-full cursor-pointer bg-green-400" ></div>
                        <input type="text" class="w-full bg-gray-200 outline-none p-1 text-xs px-3 rounded-lg" id="url" placeholder="url" value="https://www.youcode2.ma">
                    </div>
                </div>
                <hr/>
            <div class="p-3">
                <div class="mb-4">
                    <h1 class="text-2xl font-bold dark:text-white text-center">Finish</h1>
                </div>
                <p
                class="text-center mb-6 text-gray-700 dark:text-white">
                    You have finished the test.
                </p>
                <div class="flex items-center justify-end">
                    <button class=" bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        See results
                    </button>
                </div>
                </div>
            </div>
        </div>

        `;
      }
    })
    .join("");
  return `${html}`;
};
