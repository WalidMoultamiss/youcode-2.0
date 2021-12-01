export const back = ()=> {
    window.onpopstate = () => {
        router()
    }
}