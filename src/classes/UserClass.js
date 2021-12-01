
import { get, put, post } from '../helpers'

export class UserClass {
    users = []
    user

    getUsers = async () => {
        const result = await get('/schema')
        this.users = result
    }

    instription = async (data) => {
        const response = await post("/schema", data);
        console.log(response);
        this.user = response
        return response
    }
}


export default UserClass

