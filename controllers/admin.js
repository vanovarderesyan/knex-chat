const knex = require('../knex/knex');

module.exports = {
    // Find all user
    findAll(req, res) {
        return knex.select('*').from('users')
            .then(users => res.status(200).json(users))
            .catch(error => res.status(400).json(error))
    },
    findAllChats(req, res) {
        return knex.select('*').from('chats')
            .then(users => res.status(200).json(users))
            .catch(error => res.status(400).json(error))
    },

}