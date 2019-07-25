import indexController from '../controllers/index';
import express from 'express';
const router = express.Router();
// const { isImage, upload } = require('../utils/image');
const { admin } = indexController;
//get all user
router.get('/users', admin.findAll)
    //get all chats info
router.get('/chats', admin.findAllChats)



export default router;