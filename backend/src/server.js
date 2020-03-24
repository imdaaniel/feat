const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const server = express()

mongoose.connect('mongodb+srv://daniel:daniel123@feat-fqg0n.mongodb.net/dev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(routes)

server.listen(8888)