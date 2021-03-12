const config = require('config');
const server = require('./server');
const db = require('./lib/mongo/db');

db.connect().then(() => {
  server.listen(config.get('port'), config.get('host'), (err) => {
    if (err) {
      server.log.error(err);
    }
    server.swagger();
    server.log.info(`Server salati listening on ${server.server.address().port}`);
  });
});
