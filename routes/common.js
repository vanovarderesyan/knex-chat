const commonController = require('../controllers').common;
const express = require('express');
const router = express.Router();


//get all user
router.get('/index', commonController.findAll)
/*crate chat
    body example 
    {
        "name" : "Chat 1",//required
        "author_id" : 1 //required
    } 
*/
router.post('/chats', commonController.createChat)
//get all chats
router.get('/chats', commonController.getChats)
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
router.post('/messages', commonController.crateMessages)
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
router.post('/files', commonController.crateFiles)




module.exports = router;