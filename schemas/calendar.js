const success = require('../docs/models/calendar');
const { getResponse } = require('../lib/http/responses');

module.exports = {
  method: 'GET',
  url: '/calendar',
  schema: {
    tags: ['Calendar'],
    summary: 'Give you the calendar plus the curent date in hijri calendar',
    description: 'Give you the calendar plus the curent date in hijri calendar',
    operationId: 'calendar',
    response: getResponse({ success }),
  },
};
