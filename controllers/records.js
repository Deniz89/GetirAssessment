const { validationResult } = require('express-validator');

const {fetchData} = require('../db/records');

const {RETURN_CODES, RETURN_MSG} = require('../constants')

module.exports = {
  fetchRecords: (req, res) => {
    var errors = validationResult(req).array();

    if(errors && errors.length != 0) {
      res.status(400).send({
        code: RETURN_CODES.param_error,
        msg: errors.map((el) => ({msg: el.msg, param: el.param, location: el.location}))
      })
    } else {
      fetchData(req.body)
      .then((records) => {
        res.status(200).send(
          {
            code: RETURN_CODES.success,
            msg: RETURN_MSG.success,
            records 
          }
        )
      }, (err) => {
  
        res.status(500).send({ code: RETURN_CODES.db_error, msg: err})
      })
    }

  }
}
