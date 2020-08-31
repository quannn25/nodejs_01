const express = require('express');
// router.use này khác app.use
const router = express.Router();

const siteController = require('../app/SiteController');

// router.use này khác app.use
router.use('/:slug', siteController.search);

router.use('/', siteController.index);

module.exports = router;
