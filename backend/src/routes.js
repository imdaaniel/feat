const express = require('express')
const UserController = require('./controllers/UserController')
const routes = express.Router()

routes.get('/', (req, res) => {
    res.json({
        message: 'Welcome to feat'
    })
})
routes.get('/users', UserController.index)

routes.post('/users', UserController.store)

module.exports = routes;