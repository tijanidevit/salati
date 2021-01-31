const server = require('../server');
const headers = require('./headers');

describe('E2E -  GET - /health', () => {
  afterAll(() => {
    server.close();
  });

  test('responds with success on request /health', async (done) => {
    const response = await server.inject({
      method: 'GET',
      headers: headers,
      url: '/health',
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    const body = JSON.parse(response.body);
    expect(body.version).toBeDefined();
    expect(body.website).toBeDefined();
    expect(body.bugs).toBeDefined();
    expect(body.author).toBeDefined();
    expect(body.description).toBeDefined();
    expect(body.name).toBeDefined();
    done();
  });
});
