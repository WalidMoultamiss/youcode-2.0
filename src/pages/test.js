import { test1Question } from "../components";



export const test = () => {

  let questions = []
  const wahya = async () => {
    let data = await _.view()
    let html = await test1Question(data)
    return html
  }
  wahya().then((res) => (`
  <div class="flex dark:bg-gray-900 flex-col items-center justify-center h-screen">
    <h1>hello</h1>
      ${res}
  </div>

`))




};
