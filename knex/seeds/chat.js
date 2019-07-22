
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Vano',last_name: 'Varderesyan',isAdmin:false},
        {id: 2, first_name: 'Poxos',last_name: 'Poxosyan',isAdmin:false},
        {id: 3, first_name: 'admin',last_name: 'admin',isAdmin:true}
      ]);
    });
};
