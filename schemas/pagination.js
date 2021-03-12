function getPaginationSchema(items) {
  return {
    docs: {
      type: 'array',
      items,
    },
    totalDocs: {
      type: 'number',
      example: 100,
    },
    limit: {
      type: 'number',
      example: 99,
    },
    page: {
      type: 'number',
      example: 1,
    },
    totalPages: {
      type: 'number',
      example: 2,
    },
    pagingCounter: {
      type: 'number',
      example: 1,
    },
    hasPrevPage: {
      type: 'boolean',
      example: false,
    },
    hasNextPage: {
      type: 'boolean',
      example: true,
    },
    prevPage: {
      type: 'number',
      example: 1,
    },
    nextPage: {
      type: 'number',
      example: 1,
    },
  };
}

module.exports = getPaginationSchema;
