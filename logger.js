const winston = require('winston');
const config = require('config');

let logger = null;

/**
 * Initialize the loggers
 *
 * @param {String} logFileName - The log file name for file logger
 */
const init = function init() {
  logger = winston.createLogger({
    level: config.logLevel || 'info',
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
    format: winston.format.combine(
      winston.format.colorize({ all: true }),
      winston.format.simple(),
      winston.format.label({ label: '[salati]' }),
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
    ),
  });

  logger.stream = {
    write: function write(message) {
      logger.info(message);
    },
  };

  return logger;
};

const warn = function warn(message, err) {
  logger.warn(message, err);
};

const error = function error(message, err) {
  logger.error(message, err);
};

const fatal = function fatal(message, err) {
  logger.fatal(message, err);
};

const info = function info(message) {
  logger.info(message);
};

const debug = function debug(message) {
  logger.debug(message);
};

module.exports = {
  init,
  warn,
  error,
  info,
  fatal,
  debug,
};
