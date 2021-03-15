const adhan = require('adhan');
const config = require('config');
const schema = require('../schemas/prayer');
const { prayerToTime } = require('../lib/date');

async function getPrayerTimes(date = new Date(), localisation = config.get('localisation')) {
  const coords = new adhan.Coordinates(localisation.latitude, localisation.longitude);
  const params = adhan.CalculationMethod.MuslimWorldLeague();
  const prayerTimes = new adhan.PrayerTimes(coords, date, params);

  return {
    fajr: prayerToTime(prayerTimes.fajr),
    sunrise: prayerToTime(prayerTimes.sunrise),
    dhuhr: prayerToTime(prayerTimes.dhuhr),
    asr: prayerToTime(prayerTimes.asr),
    maghrib: prayerToTime(prayerTimes.maghrib),
    isha: prayerToTime(prayerTimes.isha),
    extras: {
      current: prayerTimes.currentPrayer(),
      next: prayerTimes.nextPrayer(),
    },
  };
}

module.exports = (fastify, opts, next) => {
  fastify.route({
    ...schema,
    handler: async (request, reply) => {
      const prayer = await getPrayerTimes();
      return reply.send(prayer);
    },
  });
  next();
};
