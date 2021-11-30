
import { get, put, post } from '../helpers'

export class UserClass {
    users = []

    getUsers = async () => {
        const result = await get('/schema')
        this.users = result
    }
}


export default UserClass

