const controller = require('../controllers/records')
const validator = require('../validators/records')
const limiters = require('../limiters/index')

module.exports = (router) => {

  router.route('/records/fetch')
    .post(limiters.fetchRecords, validator.fetchRecords, controller.fetchRecords)

}
