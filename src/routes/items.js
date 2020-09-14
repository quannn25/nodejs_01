const express = require('express');
// router.use này khác app.use
const router = express.Router();

const itemController = require('../app/controllers/ItemController');

// router.use này khác app.use
router.get('/create', itemController.create);
router.post('/store', itemController.store);
router.get('/:id/edit', itemController.edit);
router.put('/:id', itemController.update);
router.patch('/:id/restore', itemController.restore);
router.delete('/:id', itemController.delete);
router.delete('/:id/force', itemController.forceDelete);
router.get('/:slug', itemController.show);

module.exports = router;
