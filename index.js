// require('dotenv').config();
// const server = require('./api/server.js');
// const defaults = require('./oldserver/config/defaults')
// //./server/config/defaults

// server.listen(defaults.port, () => {
//   console.log(`\n*** Server Running on http://localhost:${defaults.port} ***\n`);
// })
require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT || 3300;

server.listen(PORT, () => console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`));
