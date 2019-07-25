const environment = process.env.ENVIRONMENT || 'development'
const config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);


// const environment = process.env.ENVIRONMENT || 'development'
// import configFile from '../knexfile.js';
// const config = configFile[environment];
// // console.log(config)
// import knexModule from 'knex';
// // console.log(knexModule)

// const knex = knexModule(config)
// export default knex;