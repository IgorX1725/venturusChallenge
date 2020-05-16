const express = require('express')
const routes = require('./routes')
const {errors} = require('celebrate')

const app = express()

//parse response to json
app.use(express.json())

app.use(routes)

app.use((req,res, next) =>{
    const error = {error: "Not Found"}
    res.status = 404
    res.send(error)
})

app.use(errors())

module.exports = app