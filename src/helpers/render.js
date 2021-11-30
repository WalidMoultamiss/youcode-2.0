export const render = (path) => {
    document.querySelectorAll('script.SPA').forEach(script => script.remove())
    const script = document.createElement('script')
    script.setAttribute('src', `./src/pages/${path}.js`)
    script.setAttribute('class', '.SPA')
    document.body.appendChild(script)
}