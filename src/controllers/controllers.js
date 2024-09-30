const Game = require('../models/model')
const games = require('../../games.json')

const insertarTodo = async (req, res, next) => {
  try {
    await Game.insertMany(games.results)
    return res.status(201).json('Todos los juegos subidos a la BBDD')
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

const get = async (req, res, next) => {
  try {
    const allGames = await Game.find()
    return res.status(200).json(allGames)
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = {
  insertarTodo,
  get
}
