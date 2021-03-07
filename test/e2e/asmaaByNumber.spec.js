const server = require('../../server');
const headers = require('./headers');

describe('E2E -  GET - /asmaas/:number', () => {
  afterAll(() => {
    server.close();
  });

  test('responds with success on request /asmaas/2', async (done) => {
    const response = await server.inject({
      method: 'GET',
      headers,
      url: '/asmaas/2',
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    const body = JSON.parse(response.body);
    expect(body.number).toBeDefined();
    expect(body.translations).toBeDefined();
    expect(body.translations[0].language).toBeDefined();
    expect(body.translations[0].name).toBeDefined();
    expect(body.metadatas).toBeDefined();
    done();
  });

  test('responds with error on request /asmaas/100', async (done) => {
    const response = await server.inject({
      method: 'GET',
      headers,
      url: '/asmaas/100',
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toBeDefined();
    const body = JSON.parse(response.body);
    expect(body.statusCode).toBe(400);
    expect(body.code).toBe('VALIDATION_ERROR');
    expect(body.message).toBe('Id of the name is invalid must be between 1-99 included');
    done();
  });
});
