const path = require('path');
const swagger = require('fastify-swagger')();
const static = require('fastify-static')();
const cors = require('fastify-cors')();
const helmet = require('fastify-helmet')();
const AutoLoad = require('fastify-autoload');
const fastify = require('fastify');

const config = require('./config');
const logger = require('./logger');

logger.init();

const server = fastify({
  logger: {
    level: config.logLevel,
  },
});

/**
 * Server plugins, security etc.
 */

server.register(cors);
server.register(helmet);

/**
 * Custom plugins, middlewares etc.
 */
server.register(AutoLoad, {
  dir: path.join(__dirname, 'plugins'),
  options: {},
});

/**
 * Schemas for validation, serialisation and swagger
 */
server.addSchema(require('./schemas/definitions'));
server.addSchema(require('./schemas/requests'));
server.addSchema(require('./schemas/responses'));

/**
 * OpenAPI Docs (Swagger)
 */
server.register(swagger, require('./docs'));
server.register(static, {
  root: path.join(__dirname, 'schemas'),
  prefix: '/',
});

/*
 * Error handler
 */
server.setErrorHandler(async (error, request, reply) => {
  if (reply.res.statusCode === 500) {
    logger.error('Error popping', error);
    return reply.internalServerError();
  }

  return reply.send(error);
});

/**
 * Routes
 */
server.register(AutoLoad, {
  dir: path.join(__dirname, 'routes'),
  options: {},
});

module.exports = server;
