const { Router } = require('express');
const {alumnoGet,alumnoPut,alumnoPost,alumnoDelete } = require('../controllers/alumnoController')

const router = Router();
router.get('/',alumnoGet);
router.put('/:id',alumnoPut);
router.post('/',alumnoPost);
router.delete('/:id',alumnoDelete);


module.exports = router;