const adminController = require('../controllers').admin;
const express = require('express');
const router = express.Router();
// const { isImage, upload } = require('../utils/image');

//get all user
router.get('/users',adminController.findAll)
//get all chats info
router.get('/chats',adminController.findAllChats)



module.exports = router;