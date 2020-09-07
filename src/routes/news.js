const express = require('express');
// router.use này khác app.use
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// router.use này khác app.use
router.get('/:slug', newsController.show);

router.get('/', newsController.index);

module.exports = router;
