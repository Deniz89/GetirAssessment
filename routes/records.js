const controller = require('../controllers/records')
const validator = require('../validators/records')

module.exports = (router) => {

  router.route('/records/fetch')
    .post(validator.fetchRecords, controller.fetchRecords)

}
