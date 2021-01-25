const config = require('./config');
const server = require('./server');

server.listen(config.port, config.host, (err) => {
  if (err) {
    server.log.error(err);
    throw err;
  }

  server.swagger();
});
