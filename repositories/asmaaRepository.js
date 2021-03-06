const config = require('config');
const mongoQueryBuilder = require('../lib/mongo/mongoQueryBuilder');
const Asmaa = require('../models/Asmaa');

/**
 * Retrieve all Asmaa
 * @returns {Asmaa}
 */
function findAll(organisation, sortFilterConfiguration) {
  const options = {
    select: '*',
    sort: {},
    lean: false,
    page: sortFilterConfiguration.pageNumber,
    limit: config.pageSize,
  };

  const query = mongoQueryBuilder.buildFilter(sortFilterConfiguration);
  options.sort = mongoQueryBuilder.buildSort(sortFilterConfiguration);
  query.organisation = organisation;
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
