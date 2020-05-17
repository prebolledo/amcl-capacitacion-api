
const deleteUser = (id, users) => {
    return users.filter(user => user.id != id)
}

export default deleteUser