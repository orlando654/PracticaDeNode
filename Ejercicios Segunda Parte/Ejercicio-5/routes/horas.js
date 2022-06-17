const {Router} = require('express')

const {
  horaGet
} = require('../controllers/horas')

const route = Router()
route.get('/', horaGet)

module.exports = route