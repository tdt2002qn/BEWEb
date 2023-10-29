const express = require('express')
const router = express.Router();
const { getHomepage, getABC, getHtml } = require('../controlers/homeController');
router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/thi', getHtml)


module.exports = router;