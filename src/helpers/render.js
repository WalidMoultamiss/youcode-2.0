export const render = (page, data = []) => {
    console.log("render : ",page);
    if (page.path === "header") {
        document.querySelector('#header').innerHTML = page.page(data)
    } else {
        document.querySelector('#app').innerHTML = page.page(data)
    }
}