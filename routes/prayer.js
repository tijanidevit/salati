const adhan = require('adhan');
const config = require('config');
const { utcToZonedTime, format } = require('date-fns-tz');
const schema = require('../schemas/prayer');

function displayDate(prayer, timezone = config.get('defaultTimezone')) {
  const FORMAT = 'HH:mm:ss';
  return format(utcToZonedTime(prayer, timezone), FORMAT);
}

async function getPrayerTimes(date = new Date(), localisation = config.get('localisation')) {
  const coords = new adhan.Coordinates(localisation.latitude, localisation.longitude);
  const params = adhan.CalculationMethod.MuslimWorldLeague();
  const prayerTimes = new adhan.PrayerTimes(coords, date, params);

  return {
    fajr: displayDate(prayerTimes.fajr),
    sunrise: displayDate(prayerTimes.sunrise),
    dhuhr: displayDate(prayerTimes.dhuhr),
    asr: displayDate(prayerTimes.asr),
    maghrib: displayDate(prayerTimes.maghrib),
    isha: displayDate(prayerTimes.isha),
    extras: {
      current: prayerTimes.currentPrayer(),
      next: prayerTimes.nextPrayer(),
      timingToNext: displayDate(prayerTimes.timeForPrayer(prayerTimes.nextPrayer())),
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
