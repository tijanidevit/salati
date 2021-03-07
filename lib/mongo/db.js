/* eslint-disable no-console */
const connect = function connect(mongoose, connectionString) {
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useUnifiedTopology', true);
  mongoose.connect(connectionString);
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDb');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDb error', err);
  });
  mongoose.connection.on('disconnected', (err) => {
    const runningIntegrationTests = !!process.env.NODE_ENV;
    if (!runningIntegrationTests) {
      console.log('MongoDb disconnected', err);
    }
  });
};

module.exports = connect;
