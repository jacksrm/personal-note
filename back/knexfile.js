// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      database: 'notepad',
      user:     '',
      password: ''
    },

    migrations: {
      directory: './src/database/migrations'
    },

    useNullAsDefault: true
  },

  test: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      database: 'notepad_test',
      user:     'root',
      password: '12345'
    },

    migrations: {
      directory: './src/database/migrations'
    },

    useNullAsDefault: true
  },


  staging: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      database: 'notepad',
      user:     'root',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
