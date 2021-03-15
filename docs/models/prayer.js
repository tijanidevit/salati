module.exports = {
  title: 'Prayer',
  properties: {
    fajr: { type: 'string', example: '05:06:00' },
    sunrise: { type: 'string', example: '05:06:00' },
    dhuhr: { type: 'string', example: '05:06:00' },
    asr: { type: 'string', example: '05:06:00' },
    maghrib: { type: 'string', example: '05:06:00' },
    isha: { type: 'string', example: '05:06:00' },
    extras: {
      current: { type: 'string', example: 'asr' },
      next: { type: 'string', example: 'maghrib' },
      timingToNext: { type: 'string', example: '05:06:00' },
    },
  },
};
