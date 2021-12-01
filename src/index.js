import Controller from "./controllers";

export default async function app() {
  window._ = new Promise((resolve, reject) => {
    return new Controller();
  });
}
