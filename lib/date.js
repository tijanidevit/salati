const config = require('config');
const fns = require('date-fns');
const { format, utcToZonedTime } = require('date-fns-tz');

// Returns mathematic mod, not javascript mod
// e.g. gmod(-3, 2) returns 1, whereas -3%2 returns -1
function gmod(n, m) {
  return ((n % m) + m) % m;
}

/* @param {Date}   date   - optional, default is today
** @param {number} adjust - optiona, days to adjust date by
*/
function kuwaiticalendar(date, adjust) {
  const today = date ? new Date(+date) : new Date();
  if (adjust) {
    today.setDate(today.getDate() + +adjust);
  }

  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let m = month + 1;
  let y = year;

  if (m < 3) {
    y -= 1;
    m += 12;
  }

  let a = Math.floor(y / 100);
  let b = 2 - a + Math.floor(a / 4);

  if (y < 1583) { b = 0; }
  if (y == 1582) {
    if (m > 10) { b = -10; }
    if (m == 10) {
      b = 0;
      if (day > 4) { b = -10; }
    }
  }

  const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524;

  b = 0;
  if (jd > 2299160) {
    a = Math.floor((jd - 1867216.25) / 36524.25);
    b = 1 + a - Math.floor(a / 4);
  }

  const bb = jd + b + 1524;
  let cc = Math.floor((bb - 122.1) / 365.25);
  const dd = Math.floor(365.25 * cc);
  const ee = Math.floor((bb - dd) / 30.6001);
  day = (bb - dd) - Math.floor(30.6001 * ee);
  month = ee - 1;

  if (ee > 13) {
    cc += 1;
    month = ee - 13;
  }
  year = cc - 4716;
  const wd = gmod(jd + 1, 7) + 1;

  const iyear = 10631.0 / 30.0;
  const epochastro = 1948084;

  const shift1 = 8.01 / 60.0;

  let z = jd - epochastro;
  const cyc = Math.floor(z / 10631.0);
  z -= 10631 * cyc;
  const j = Math.floor((z - shift1) / iyear);
  const iy = 30 * cyc + j;
  z -= Math.floor(j * iyear + shift1);
  let im = Math.floor((z + 28.5001) / 29.5);

  if (im == 13) { im = 12; }
  const id = z - Math.floor(29.5001 * im - 29);

  return {
    day, // calculated day (CE)
    month, // calculated month
    year, // calculated year (CE)
    jd: jd - 1, // julian day number
    wd: wd - 1, // weekday number
    id, // islamic date
    im: im - 1, // islamic month
    iy, // islamic year
  };
}

function writeIslamicDate(date, adjustment) {
  const wdNames = ['Ahad', 'Ithnin', 'Thulatha', 'Arbaa', 'Khams', 'Jumuah', 'Sabt'];
  const iMonthNames = ['Muharram', 'Safar', "Rabi'ul Awwal", "Rabi'ul Akhir", 'Jumadal Ula', 'Jumadal Akhira',
    'Rajab', "Sha'ban", 'Ramadan', 'Shawwal', "Dhul Qa'ada", 'Dhul Hijja'];
  const iDate = kuwaiticalendar(date, adjustment);
  return iDate;
}

function toTimeZione(date, timezone = config.get('defaultTimezone')) {
  return utcToZonedTime(date, timezone);
}

function prayerToTime(prayer) {
  const FORMAT = 'HH:mm:ss';
  return format(toTimeZione(prayer), FORMAT);
}

function getMonth(date = new Date()) {
  return new Date(date).getMonth();
}

function getYear(date) {
  return new Date(date).getFullYear();
}

function getDaysInMonth(date) {
  return fns.getDaysInMonth(date);
}

module.exports = {
  prayerToTime,
  getMonth,
  getYear,
  getDaysInMonth,
  writeIslamicDate,
  toTimeZione,
};
