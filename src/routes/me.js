const express = require('express');
// router.use này khác app.use
const router = express.Router();

const meController = require('../app/controllers/MeController');

// router.use này khác app.use
router.get('/stored/items', meController.storedItems);

module.exports = router;
