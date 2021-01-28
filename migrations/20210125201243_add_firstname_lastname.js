
exports.up = function(knex, Promise) {
    return knex.schema.table('user', function(table){
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('user', function(table){
        table.dropColumn('firstName');
        table.dropColumn('lastName');
    });
};
