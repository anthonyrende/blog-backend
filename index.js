require('dotenv').config();
const server = require('./api/server.js');
const defaults = require('./config/defaults')
// const Sequelize = require('sequelize'), sequelize = null
// const http = require('http')

// if (process.env.DATABASE_URL) {
//     // the application is executed on Heroku ... use the postgres database
//     sequelize = new Sequelize(process.env.DATABASE_URL, {
//       dialect:  'postgres',
//       protocol: 'postgres'
//     })
//   }

//   db.sequelize.sync().then(function() {
//     http.createServer(server).listen(server.get('port'), function(){
//       console.log('Express server listening on port ' + server.get('port'));
//     });
//   });

server.listen(defaults.port, () => {
  console.log(`\n*** Server Running on http://localhost:${defaults.port} ***\n`);
})