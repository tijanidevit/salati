const mongoQueryBuilder = require('../lib/mongo/mongoQueryBuilder');
const Asmaa = require('../models/Asmaa');

/**
 * Retrieve all Asmaa
 * @returns {Asmaa}
 */
async function findAll(sortFilterConfiguration) {
  const options = {
    sort: {},
    lean: false,
    page: sortFilterConfiguration.page,
    limit: 99,
  };

  const query = mongoQueryBuilder.buildFilter(sortFilterConfiguration);
  options.sort = mongoQueryBuilder.buildSort(sortFilterConfiguration);
  return Asmaa.paginate(query, options);
}

/**
 * Retrieve client by its number
 * @returns {Asmaa}
 */
function findOne(number) {
  return Asmaa.findOne({ number });
}

module.exports = {
  findOne,
  findAll,
};
