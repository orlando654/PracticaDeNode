const { Router } = require('express');
const { utilGet, utilPut, utilPost, utilDelete } = require('../controllers/utilController');

const router = Router();

router.get('/', utilGet);
router.put('/:id', utilPut);
router.post('/', utilPost);
router.delete('/:id', utilDelete);

module.exports = router;