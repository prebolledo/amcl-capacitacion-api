
const addUser = (user, users) => {
    user.id = users.length + 1
    users.push(user)
    return true
}

export default addUser