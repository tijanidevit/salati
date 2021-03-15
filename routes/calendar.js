const { writeIslamicDate, getDaysInMonth, getMonth, getYear } = require('../lib/date');
const schema = require('../schemas/calendar');

function getMonthDates(date) {
  const month = getMonth();
  const year = getYear(date);
  const totalDays = getDaysInMonth(new Date(year, month));
  const dates = [...Array(totalDays).keys()].map((i) => {
    const d = new Date(year, month, i + 1);
    return writeIslamicDate(d);
  });
  return dates;
}

module.exports = (fastify, opts, next) => {
  fastify.route({
    ...schema,
    handler: async (request, reply) => {
      const date = new Date();
      const today = writeIslamicDate(date);
      const month = getMonthDates(date);
      return reply.send({
        today,
        month,
      });
    },
  });
  next();
};
