import { test1Question } from "../components";



export const test = () => {

  const wahya = async () => {
    let data = await _.view()
    console.log(data);
  }
  wahya()



  return `
                <div class="flex dark:bg-gray-900 flex-col items-center justify-center h-screen">
                    ${test1Question()}
                </div>

    `;
};
