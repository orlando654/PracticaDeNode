const {Router} = require('express')
const {
  personaGet,
  personaGet2,
  personaGet3,
  personaPost,
  personaPut,
  personaDelete
} = require('../controllers/personas')


const route = Router()

route.get('/', personaGet)
route.get('/:parametro',personaGet2)
route.get('/:inicial/:sexo',personaGet3)
route.post('/', personaPost)
route.put('/:id', personaPut)
route.delete('/:id', personaDelete)

module.exports = route