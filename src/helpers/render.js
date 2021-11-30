export const render = (page) => {
    document.querySelector('#app').innerHTML = page.page()
}