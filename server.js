const path = require('path');
const AutoLoad = require('fastify-autoload');
const fastify = require('fastify');

const config = require('./config');
const logger = require('./logger');
const onRequestHook = require('./hooks/on-request');
const httpErrors = require('./lib/http-errors');

logger.init();

const server = fastify({
  logger: {
    level: config.logLevel,
  },
});

/**
 * Server plugins, security etc.
 */
server.register(require('fastify-cors'), {});
server.use(require('dns-prefetch-control')());
server.use(require('frameguard')());
server.use(require('hide-powered-by')());
server.use(require('hsts')());
server.use(require('ienoopen')());
server.use(require('x-xss-protection')());
server.use(require('compression')());

/**
 * Custom plugins, middlewares etc.
 */
server.register(AutoLoad, {
  dir: path.join(__dirname, 'plugins'),
  options: {},
});

/**
 * Hooks
 */
server.addHook('onRequest', onRequestHook);

/**
 * Schemas for validation, serialisation and swagger
 */
server.addSchema(require('./schemas/definitions'));
server.addSchema(require('./schemas/requests'));
server.addSchema(require('./schemas/responses'));

/**
 * OpenAPI Docs (Swagger)
 */
server.register(require('fastify-swagger'), require('./docs'));
server.register(require('fastify-static'), {
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
  dir: path.join(__dirname, 'services'),
  options: {},
});

module.exports = server;
