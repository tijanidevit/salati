const path = require('path');
const swagger = require('fastify-swagger');
const assets = require('fastify-static');
const cors = require('fastify-cors');
const helmet = require('fastify-helmet');
const load = require('fastify-autoload');
const fastify = require('fastify');
const mongoose = require('mongoose');
const config = require('config');

const docs = require('./docs');
const db = require('./lib/mongo/db');

const server = fastify({
  logger: {
    level: config.get('logLevel'),
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

// Mongo connection
db(mongoose, config.get('mongo'));

/**
 * Server plugins, security etc.
 */
server.register(cors);
server.register(helmet, {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', 'validator.swagger.io'],
      scriptSrc: ["'self'", "https: 'unsafe-inline'"],
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
server.setErrorHandler(async (error, request, reply) => reply.send(error));

server.register(assets, {
  root: path.join(__dirname, 'schemas'),
  prefix: '/schemas/',
});

/**
 * Routes
 */
server.register(load, {
  dir: path.join(__dirname, 'routes'),
  options: {},
});

module.exports = server;
