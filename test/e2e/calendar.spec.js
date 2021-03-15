const server = require('../../server');
const headers = require('./headers');

describe('E2E -  GET - /calendar', () => {
  afterAll(() => {
    server.close();
  });

  test('responds with success on request /calendar', async (done) => {
    const response = await server.inject({
      method: 'GET',
      headers,
      url: '/calendar',
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    const body = JSON.parse(response.body);
    expect(body.today).toBeDefined();
    expect(body.month).toBeDefined();
    expect(body.month.length).toBeDefined();
    expect(body.today.day).toBeDefined();
    expect(body.today.month).toBeDefined();
    expect(body.today.year).toBeDefined();
    expect(body.today.jd).toBeDefined();
    expect(body.today.wd).toBeDefined();
    expect(body.today.id).toBeDefined();
    expect(body.today.im).toBeDefined();
    expect(body.today.iy).toBeDefined();
    body.month.forEach((d) => {
      expect(d.day).toBeDefined();
      expect(d.month).toBeDefined();
      expect(d.year).toBeDefined();
      expect(d.jd).toBeDefined();
      expect(d.wd).toBeDefined();
      expect(d.id).toBeDefined();
      expect(d.im).toBeDefined();
      expect(d.iy).toBeDefined();
    });
    done();
  });
});
