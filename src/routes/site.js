const express = require('express');
// router.use này khác app.use
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// router.use này khác app.use
router.get('/:slug', siteController.search);

router.get('/', siteController.index);

module.exports = router;
