const server = require('../../server');
const headers = require('./headers');
const db = require('../../lib/mongo/db');

describe('E2E -  GET - /hadiths', () => {
  beforeAll(async () => {
    await db.connect();
  });

  afterAll(async () => {
    await db.close();
    server.close();
  });

  test('responds with success on request /hadiths', async (done) => {
    const response = await server.inject({
      method: 'GET',
      headers,
      url: '/hadiths',
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    const body = JSON.parse(response.body);
    expect(body.docs).toBeDefined();
    expect(body.docs[0].id).toBeDefined();
    expect(body.docs[0].title).toBeDefined();
    expect(body.docs[0].author).toBeDefined();
    expect(body.docs[0].link).toBeDefined();
    expect(body.docs[0].source).toBeDefined();
    expect(body.docs[0].metadatas).toBeDefined();
    expect(body.docs[0].translations).toBeDefined();
    expect(body.docs[0].translations[0].description).toBeDefined();
    expect(body.docs[0].translations[0].language).toBeDefined();
    expect(body.docs[0].translations[0].name).toBeDefined();
    expect(body.totalDocs).toBeDefined();
    expect(body.limit).toBeDefined();
    expect(body.page).toBeDefined();
    expect(body.totalPages).toBeDefined();
    expect(body.pagingCounter).toBeDefined();
    expect(body.hasPrevPage).toBeDefined();
    expect(body.prevPage).toBeDefined();
    expect(body.nextPage).toBeDefined();
    expect(body.hasNextPage).toBeDefined();
    done();
  });
});
