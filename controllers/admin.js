const knex = require('../knex/knex');
const bookshelf = require('bookshelf')(knex);

const Chats = bookshelf.Model.extend({
    tableName: 'chats',
    messages: function () {
        return this.hasMany(Messages) //make the relationship with hardwiredinput
    }
});



//create the hardwired input model
const Files = bookshelf.Model.extend({
    tableName: 'files'
});



//retrieve the first equipment and all its related hardwiredinputs
const Messages = bookshelf.Model.extend({
    tableName: 'messages',
    files: function () {
        return this.hasMany(Files) //make the relationship with hardwiredinput
    }
});

module.exports = {
    // Find all user
    findAll(req, res) {
        return knex.select('*').from('users')
            .then(users => res.status(200).json(users))
            .catch(error => res.status(400).json(error))
    },
    findAllChats(req, res) {
        return Chats.where('id','>', 0).fetchAll({ withRelated: ['messages.files'] })
            .then((users) => {
                // console.log(users.related('messages').toJSON());

                res.status(200).json(users)
            })
            .catch((error) => {
                console.log(error)
                res.status(400).json(error)
            })
    },

}