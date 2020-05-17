import express from 'express'
import bodyParser from 'body-parser'
const compression = require('compression');

const PORT = process.env.PORT || 3000
const boostrap = (init) => {
    const app = express()

    //Compresion
    app.use(compression({filter: () => true }));
    //application/json
    app.use(bodyParser.json())
    //application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }))

    let router = express.Router()

    //init 
    app.use('/', init(router))

    app.listen(PORT, "0.0.0.0");

    console.log(`MS OK running on port ${PORT}`)
}

export default boostrap
