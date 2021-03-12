const mongoQueryBuilder = require('../lib/mongo/mongoQueryBuilder');
const Hadith = require('../models/Hadith');

/**
 * Retrieve all Hadith
 * @returns {Hadith}
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
  return Hadith.paginate(query, options);
}

/**
 * Retrieve hadith by its id
 * @returns {Hadith}
 */
function findOne(id) {
  return Hadith.findOne({ id });
}

/**
 * Retrieve hadith randomly
 * @returns {Hadith}
 */
function findRandomly() {
  return Hadith.aggregate([{ $sample: { size: 1 } }]);
}

module.exports = {
  findOne,
  findRandomly,
  findAll,
};
