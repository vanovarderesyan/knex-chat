const adminController = require('../controllers').admin;
const express = require('express');
const router = express.Router();
// const { isImage, upload } = require('../utils/image');


router.get('/users',adminController.findAll)


module.exports = router;