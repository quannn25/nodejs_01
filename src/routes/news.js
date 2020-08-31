const express = require('express');
// router.use này khác app.use
const router = express.Router();

const newsController = require('../app/NewsController');

// router.use này khác app.use
router.use('/:slug', newsController.show)

router.use('/', newsController.index)

module.exports = router;