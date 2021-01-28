const knex = require('knex')(require('../knexfile'));

const USER_FIELDS = [
    'id',
    'username',
    'firstName',
    'lastName'
];

const insert = (user) => 
    knex.insert(user)
        .into('user')
        .returning('id')
        .then(idArray => ({
            insertId: idArray[0]
        }));

const getOneByUsername = username =>
knex('user')
    .first(...USER_FIELDS, 'password')
    .where('username', username)

const getByUsername = username => 
    knex('user')
        .select(...USER_FIELDS, 'password' )
        .where('username', username);

const getById = id => 
    knex('user')
        .first('id', 'username', 'firstName', 'lastName')
        .where({ id });


const getAll = () => knex('user').select(...USER_FIELDS);

const deleteById = id =>
        knex('user').del().where({ id });

const update = (id, values) => {
    console.log(values);
        knex('user').update(values).where({ id });
};

const usernameExitsElsewhere = (id, username) =>
    knex('user')
        .select('id')
        .whereRaw({username})
        .andWhereNot({ id })
        .then(result => result.length > 0);

module.exports = {
    insert,
    getOneByUsername,
    getByUsername,
    getById,
    getAll,
    deleteById,
    update,
    usernameExitsElsewhere
};