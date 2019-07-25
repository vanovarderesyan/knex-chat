import knex from '../knex/knex';
// console.log(knex)
import bookshelfModule from 'bookshelf';

const bookshelf = bookshelfModule(knex)
const Chats = bookshelf.Model.extend({
    tableName: 'chats',
    messages: function() {
        return this.hasMany(Messages)
    }
});

const Files = bookshelf.Model.extend({
    tableName: 'files'
});

const Messages = bookshelf.Model.extend({
    tableName: 'messages',
    files: function() {
        return this.hasMany(Files)
    }
});

export default {
    // Find all user
    findAll(req, res) {
        return knex.select('*').from('users')
            .then(users => res.status(200).json(users))
            .catch(error => res.status(400).json(error))
    },
    //find all chats
    findAllChats(req, res) {
        return Chats.where('id', '>', 0).fetchAll({ withRelated: ['messages.files'] })
            .then((users) => {
                res.status(200).json(users)
            })
            .catch((error) => {
                res.status(400).json(error)
            })
    },

}