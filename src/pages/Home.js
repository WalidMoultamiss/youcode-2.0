import { inscription, btn } from '../components'

//fetch data from localhost:5000
const fetchData = async () => {
    const data = fetch('http://localhost:5000/api/users').then(res => res.json())
    console.log(data);
    return data
}

fetchData()

export const Home = () => {
    return (`
        ${inscription()}
    `)
}
