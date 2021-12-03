
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

    getUserById = async (id) => {
        const result = await get(`/schema/${id}`)
        return result
    }

    updateStatus = async (id, status) => {
        let user = await this.getUserById(id)
        return await put(`/schema/${id}`, { ...user, status: status })
    }

    instription = async (data) => {
        const response = await post("/schema", data);
        this.user = response
        return response
    }

}


export default UserClass

