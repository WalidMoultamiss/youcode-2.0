import { image } from '../components/image'
export const Home = () => {
    document.querySelector('#ctn').innerHTML = `
        <h1>Home page</h1>
        ${image()}
    `
}