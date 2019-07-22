const commonController = require('../controllers').common;
const express = require('express');
const router = express.Router();
// const { isImage, upload } = require('../utils/image');


router.get('/index',commonController.findAll)


module.exports = router;