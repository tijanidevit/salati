const path = require('path');
const swagger = require('fastify-swagger');
const assets = require('fastify-static');
const cors = require('fastify-cors');
const helmet = require('fastify-helmet');
const load = require('fastify-autoload');
const fastify = require('fastify');

const config = require('./config');
const docs = require('./docs');

const server = fastify({
  logger: {
    level: config.logLevel,
    redact: ['req.headers.authorization'],
    prettyPrint: true,
    serializers: {
      req(req) {
        return {
          method: req.method,
          url: req.url,
          headers: req.headers,
          hostname: req.hostname,
          remoteAddress: req.ip,
          remotePort: req.connection.remotePort,
        };
      },
    },
  },
});

/**
 * Server plugins, security etc.
 */

server.register(cors);
server.register(helmet, {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: [`'self'`],
      styleSrc: [`'self'`, `'unsafe-inline'`],
      imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
      scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
    },
  },
});

/**
 * Custom plugins, middlewares etc.
 */
server.register(load, {
  dir: path.join(__dirname, 'plugins'),
  options: {},
});

server.register(swagger, docs);

/*
 * Error handler
 */
server.setErrorHandler(async (error, request, reply) => {
  if (reply.res.statusCode === 500) {
    return reply.internalServerError();
  }

  return reply.send(error);
});

/**
 * Routes
 */
server.register(load, {
  dir: path.join(__dirname, 'routes'),
  options: {},
});

server.register(assets, {
  root: path.join(__dirname, 'schemas'),
  prefix: '/schemas/',
});

module.exports = server;
