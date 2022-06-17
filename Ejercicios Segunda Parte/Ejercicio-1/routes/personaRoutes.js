const { Router } = require('express');
const { personaGet, personaPut, personaPost, personaDelete } = require('../controllers/personaController');

const router = Router();

router.get('/', personaGet);

router.put('/', personaPut);

router.post('/', personaPost);

router.delete('/', personaDelete);

module.exports = router;