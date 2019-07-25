import indexController from '../controllers/index';
import express from 'express';
const router = express.Router();

let { common } = indexController;


//get all user
router.get('/index', common.findAll)
    /*crate chat
        body example 
        {
            "name" : "Chat 1",//required
            "author_id" : 1 //required
        } 
    */
router.post('/chats', common.createChat)
    //get all chats
router.get('/chats', common.getChats)
    //create messages
    /*
        body example 
       {
            "text":"messages3",//required
            "chat_id":3,       //required
            "source_id" : 1   ,//required
            "destination_id" : 2
        }
    */
router.post('/messages', common.crateMessages)
    //create files chats
    /*
        form-data
        [
        {
            "key": "chatFiles",
            "value": {
            "0": {}
            },
            "description": "",
            "type": "file",
            "enabled": true
        },
        {
            "key": "chatFiles",
            "value": {
            "0": {}
            },
            "description": "",
            "type": "file",
            "enabled": true
        },
        {
            "key": "chat_id",
            "value": "3",
            "description": "",
            "type": "text",
            "enabled": true
        },
        {
            "key": "text",
            "value": "message2",
            "description": "",
            "type": "text",
            "enabled": true
        },
        {
            "key": "source_id",
            "value": "1",
            "description": "",
            "type": "text",
            "enabled": true
        },
        {
            "key": "destination_id",
            "value": "2",
            "description": "",
            "type": "text",
            "enabled": true
        }
        ]
    */
router.post('/files', common.crateFiles)




export default router;