import {query} from '../db'

const addUser = async (user, users) => {
    const result = await query(`insert into users(name) values('${user.name}')`)
    console.log(result)
    return true
}

export default addUser