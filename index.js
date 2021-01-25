const config = require('./config');
const server = require('./server');

server.listen(config.port, config.host, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  server.log.info(`Server salati listening on ${server.server.address().port}`)
  server.swagger();
});
