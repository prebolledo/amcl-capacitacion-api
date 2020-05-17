
const getUser = (id, users) => {
    const user = users.find(user => user.id == id)
    return user != undefined ? user : null
}

export default getUser