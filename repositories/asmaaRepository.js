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
 * Retrieve asmaa by its number
 * @returns {Asmaa}
 */
function findOne(number) {
  return Asmaa.findOne({ number });
}

/**
 * Retrieve asmaa randomly
 * @returns {Hadith}
 */
function findRandomly() {
  return Asmaa.aggregate([{ $sample: { size: 1 } }]);
}

module.exports = {
  findOne,
  findRandomly,
  findAll,
};
