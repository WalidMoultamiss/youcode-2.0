import { router } from "./"

export const back = ()=> {
    window.onpopstate = () => {
        router()
    }
}