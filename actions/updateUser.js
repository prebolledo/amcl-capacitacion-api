
const updateUser = (id, data, users) => {
    const user = users.find(user => user.id == id)
    
    for(let key in data){
        if(user[key] != undefined){
            user[key] = data[key]
        }
    }

    return users
}

export default updateUser