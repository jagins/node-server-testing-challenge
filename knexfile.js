// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/songs',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    }
  },
};
