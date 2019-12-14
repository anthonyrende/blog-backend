require('dotenv').config()

module.exports = {
    development: {
      url: process.env.DEV_DATABASE_URL,
      dialect: 'postgres',
    },
    test: {
      url: process.env.TEST_DATABASE_URL,
      dialect: 'postgres',
    },
    production: {
      url: process.env.DATABASE_URL,
      dialect: 'postgres',
    },
  }

//   "development": {
//     "DB_USER": "root",
//     "DB_PASSWORD": null,
//     "DB_DATABASE": "database_development",
//     "DB_HOST": "127.0.0.1",
//     "dialect": "postgres",
//     "operatorsAliases": false
//   },
