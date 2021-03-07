const server = require('../../server');
const headers = require('./headers');

describe('E2E -  GET - /asmaas', () => {
  afterAll(() => {
    server.close();
  });

  test('responds with success on request /asmaas', async (done) => {
    const response = await server.inject({
      method: 'GET',
      headers,
      url: '/asmaas',
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    const body = JSON.parse(response.body);
    expect(body.docs).toBeDefined();
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
