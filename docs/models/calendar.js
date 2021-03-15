const hijriDate = require('./hijriDate');

module.exports = {
  title: 'Calendar',
  properties: {
    today: hijriDate,
    month: {
      title: 'month',
      type: 'array',
      items: hijriDate,
    },
  },
};
