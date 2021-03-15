const server = require('../../server');
const headers = require('./headers');

describe('E2E -  GET - /prayer', () => {
  afterAll(() => {
    server.close();
  });

  test('responds with success on request /prayer', async (done) => {
    const response = await server.inject({
      method: 'GET',
      headers,
      url: '/prayer',
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    const body = JSON.parse(response.body);
    expect(body.fajr).toBeDefined();
    expect(body.sunrise).toBeDefined();
    expect(body.dhuhr).toBeDefined();
    expect(body.asr).toBeDefined();
    expect(body.maghrib).toBeDefined();
    expect(body.isha).toBeDefined();
    expect(body.extras).toBeDefined();
    expect(body.extras.current).toBeDefined();
    expect(body.extras.next).toBeDefined();
    expect(body.extras.timingToNext).toBeDefined();
    done();
  });
});
