export const render = (page, data = []) => {
    if (page.path === "header") {
        document.querySelector('#header').innerHTML = page.page(data)
    } else {
        document.querySelector('#app').innerHTML = page.page()
    }
}