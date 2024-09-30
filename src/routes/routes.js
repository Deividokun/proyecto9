const { insertarTodo, get } = require('../controllers/controllers')

const videoJuegosRouter = require('express').Router()

videoJuegosRouter.post('/robbank', insertarTodo)
videoJuegosRouter.get('/givemethemoney', get)

module.exports = videoJuegosRouter
