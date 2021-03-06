const server = require('../../server');
const headers = require('./headers');
const db = require('../../lib/mongo/db');

describe('E2E -  GET - /asmaas/:number', () => {
  beforeAll(async () => {
    await db.connect();
  });

  afterAll(async () => {
    await db.close();
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

  test('responds with error on request /asmaas/100 validation of param', async (done) => {
    const response = await server.inject({
      method: 'GET',
      headers,
      url: '/asmaas/100',
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toBeDefined();
    const body = JSON.parse(response.body);
    expect(body.code).toBe('VALIDATION_ERROR');
    expect(body.message).toBe('Id of the name is invalid must be between 1-99 included');
    done();
  });
  test('responds with error on request /asmaas/2.5 cannot be found', async (done) => {
    const response = await server.inject({
      method: 'GET',
      headers,
      url: '/asmaas/2.5',
    });

    expect(response.statusCode).toBe(404);
    expect(response.body).toBeDefined();
    const body = JSON.parse(response.body);
    expect(body.name).toBe('NotFoundError');
    expect(body.message).toBe('The name cannot be found.');
    done();
  });
});
