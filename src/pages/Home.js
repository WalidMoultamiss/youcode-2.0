import { inscription, btn } from '../components'
import { get,post } from "../helpers"

//fetch data from localhost:5000
const fetchData = async () => {
    const data = fetch('http://localhost:5000/api/users').then(res => res.json())
    console.log(data);
    return data
}

fetchData()

export const Home = () => {
    
    
    return (`
        <h1>Home page</h1>
        <button
        class="bg-green-700 p-3 rounded-md outline-none text-white"
        onclick="goTo('home')"
        >
            Home
        </button>
        <button
            class="bg-green-700 p-3 rounded-md outline-none text-white"
            onclick="goTo('about')"
        >
            About
      </button>
        ${inscription()}
        ${btn('add new btn','p-3 rounded-lg hover:bg-blue-500 hover:text-white')}

    `)
}
