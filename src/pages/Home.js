import { image } from '../components/image'
import { inscription, btn } from '../components'
export const Home = () => {
    document.querySelector('#ctn').innerHTML = `
        <h1>Home page</h1>
        ${inscription()}
        ${btn('add new btn','p-3 rounded-lg hover:bg-blue-500 hover:text-white')}

    `
}