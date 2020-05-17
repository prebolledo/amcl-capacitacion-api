const getUsers = (users, optionalParams = {}) => {
    if(optionalParams["ordeById"] != undefined){
        users = ordeBy(users, optionalParams["ordeById"])
    }
    return users
}

const ordeBy = (users, option) => {
    switch(option) {
        case 'DESC': {

            users = users.sort((userA, userB) => {
                return userB.id - userA.id
            })

            break
        }
        case 'ASC': {

            users = users.sort((userA, userB) => {
                return userA.id - userB.id
            })

            break
        }        
        default: {

        }
    }
    return users
}


export default getUsers