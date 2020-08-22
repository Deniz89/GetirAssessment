const dbInit = require('./init')
const utils = require('./utils')

const fetchData = (params) => {
  return new Promise((resolve, reject) => {

    // use query builder's fetchRecords function to build $match part of mongodb query
    // I've assumed all of the parameters are optional,
    // so if any of them exists, I put it to the query
    const $match = utils.queryBuilder.fetchRecords(params)

    dbInit.open()
    .then((db) => { 
      return db.collection('records')
    })
    .then((records) => {

      return records.aggregate(
        [
          {
            $addFields: {
                totalCount: {
                  $sum: "$counts"
                }
            }
          },
          {$match
          },
          {$sort:
            {
              createdAt: 1
            }
          },
          {
            $project: {
              _id: 0,
              key: 1,
              createdAt: 1,
              totalCount: 1
            }
          }
        ]
      ).toArray()
    })
    .then((items) => {
      dbInit.close()
      resolve(items)
    })
    .catch((err) => {
      reject(err)
    })
  })
}

module.exports = {
  fetchData
}