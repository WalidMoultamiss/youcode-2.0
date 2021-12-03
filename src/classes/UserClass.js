
import { get, put, post } from '../helpers'

export class UserClass {
    users = []
    user

    getUsers = async () => {
        const result = await get('/schema')
        this.users = result
    }

    //login
    getUserByEmail = async (email) => {
        const result = await get(`/schema?email=${email}`)
        return result
    }

    updateStatus = async (id, status) => {
        const status = await put(`/schema?id=${id}`, { status: status })
    }

    instription = async (data) => {
        const response = await post("/schema", data);
        this.user = response
        return response
    }

}


export default UserClass

