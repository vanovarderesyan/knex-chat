const knex = require('../knex/knex');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads/files');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now()+'-'+file.originalname);
    }
});

let upload = multer({ storage: storage }).array('chatFiles', 100);

module.exports = {
    // Create a new chats
    createChat(req, res) {
        return knex('chats').insert(req.body)
            .then((chats) => {
                res.status(200).json(chats)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },


    getChats(req, res) {
        return knex.select('chats.id as chat_id', 'users.last_name as author_last_name', 'users.first_name as author_first_name', 'author_id', 'name')
            .from('chats')
            .innerJoin('users', 'author_id', 'users.id')
            .then((chats) => {
                res.status(200).json(chats)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    crateMessages(req, res) {
        return knex('messages').insert(req.body)
            .then((chats) => {
                res.status(200).json(chats)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    // Find all users
    findAll(req, res) {
        return knex.select('*').from('users')
            .then(users => res.status(200).json(users))
            .catch(error => res.status(400).json(error))
    },

    crateFiles(req,res){
        upload(req,res,function(err) {
            console.log(req.body);
            console.log(req.files);
            if(err) {
                return res.end("Error uploading file.");
            }

            let insertedList = [];
            let data = req.body;
            knex('messages').insert(data)
            .returning('id')
            .then((id) => {
                req.files.forEach(element => {
                    insertedList.push({
                        name:element.path,
                        messages_id:id
                    })
                });
                knex('files').insert(insertedList)
                    .then(result => res.status(200).json({
                        message:"File is uploaded"
                    }))
                    .catch(err => res.status(400).json(err))
            })
            .catch((err) => {
                res.status(400).json(err)
            })
        });
    },
}