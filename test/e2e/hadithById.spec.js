const server = require('../../server');
const headers = require('./headers');
const db = require('../../lib/mongo/db');

describe('E2E -  GET - /hadiths/:id', () => {
  beforeAll(async () => {
    await db.connect();
  });

  afterAll(async () => {
    await db.close();
    server.close();
  });

  test('responds with success on request /hadiths/1', async (done) => {
    const response = await server.inject({
      method: 'GET',
      headers,
      url: '/hadiths/1',
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    const body = JSON.parse(response.body);
    expect(body.id).toBeDefined();
    expect(body.title).toBeDefined();
    expect(body.author).toBeDefined();
    expect(body.link).toBeDefined();
    expect(body.source).toBeDefined();
    expect(body.translations).toBeDefined();
    expect(body.translations[0].description).toBeDefined();
    expect(body.translations[0].language).toBeDefined();
    expect(body.translations[0].name).toBeDefined();
    done();
  });

  test('responds with error on request /hadiths/100 not found', async (done) => {
    const response = await server.inject({
      method: 'GET',
      headers,
      url: '/hadiths/100',
    });

    expect(response.statusCode).toBe(404);
    expect(response.body).toBeDefined();
    const body = JSON.parse(response.body);
    expect(body.name).toBe('NotFoundError');
    expect(body.message).toBe('The hadit cannot be found.');
    done();
  });
});
