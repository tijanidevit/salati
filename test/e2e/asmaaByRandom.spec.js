const server = require('../../server');
const headers = require('./headers');
const db = require('../../lib/mongo/db');

describe('E2E -  GET - /asmaas/random', () => {
  beforeAll(async () => {
    await db.connect();
  });

  afterAll(async () => {
    await db.close();
    server.close();
  });

  test('responds with success on request /asmaas/random', async (done) => {
    const response = await server.inject({
      method: 'GET',
      headers,
      url: '/asmaas/random',
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
});
