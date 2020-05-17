import boostrap from './server'
import originalUsers from './actions/users'
import getUsers from './actions/getUsers'
import addUser from './actions/addUser'
import deleteUser from './actions/deleteUser'
import updateUser from './actions/updateUser'
import getUser from './actions/getUser'

let users = originalUsers

boostrap(router => {

    router.get('/', (req, res, next) => {
        const optionalParams = req.query
        res.status(200).json(getUsers(users, optionalParams))
    })

    router.get('/:id', (req, res, next) => {
        const userId = req.params.id
        const user = getUser(userId, users)
        res.status(200).json(user)
    })    

    router.post('/', (req, res, next) => {
        const user = req.body
        const result = addUser(user, users)
        res.status(200).json({
            OK: result
        })
    })   
    
    router.delete('/:id', (req, res, next) => {
        const userId = req.params.id
        users = deleteUser(userId, users)
        res.status(200).json({
            OK: true
        })
    })    


    router.put('/:id', (req, res, next) => {
        const userId = req.params.id
        const data = req.body
        users = updateUser(userId, data, users)
        res.status(200).json({
            OK: true
        })
    })  

    return router

})