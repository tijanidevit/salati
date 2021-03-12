/* eslint-disable no-console */
const mongoose = require('mongoose');
const config = require('config');

mongoose.Promise = Promise;

mongoose.connection.on('connected', () => {
  console.log('Connection Established');
});

mongoose.connection.on('reconnected', () => {
  console.log('Connection Reestablished');
});

mongoose.connection.on('disconnected', () => {
  console.log('Connection Disconnected');
});

mongoose.connection.on('close', () => {
  console.log('Connection Closed');
});

mongoose.connection.on('error', (error) => {
  console.log(`ERROR: ${error}`);
});

const connect = async () => {
  await mongoose.connect(config.get('mongo'), {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};

const close = async () => {
  await mongoose.disconnect();
};

module.exports = {
  connect,
  close,
};
