const moment = require('moment')
const {check} = require('express-validator');

const def = require('./definitions')

const {ERR_DETAILS} = require('../constants')

/**
 * startDate, endDate, minCount, maxCount
 */

module.exports = {
  fetchRecords: [
    check('startDate')
    .optional()
    .trim()
    .isDate('YYYY-MM-DD').withMessage(ERR_DETAILS["startDate-not-valid"]),

    check('endDate')
    .optional()
    .trim()
    .isDate('YYYY-MM-DD').withMessage(ERR_DETAILS["endDate-not-valid"]).bail()
    .custom((value, {req}) => {
      if(req.body.startDate) {
        if(moment(value).diff(req.body.startDate, 'days') < 0) {
          throw new Error(ERR_DETAILS["endDate-not-correct"]);
        } else {
          return true
        }
      } else {
        return true
      }
    }),

    check('minCount')
    .optional()
    .trim()
    .isInt({min: def.COUNT_MIN, max: def.COUNT_MAX})
      .withMessage(ERR_DETAILS["minCount-not-valid"](def.COUNT_MIN, def.COUNT_MAX)),
    
    check('maxCount')
    .optional()
    .trim()
    .isInt({min: def.COUNT_MIN, max: def.COUNT_MAX})
      .withMessage(ERR_DETAILS["minCount-not-valid"](def.COUNT_MIN, def.COUNT_MAX)).bail()
    .custom((value, {req}) => {
      const {minCount} = req.body

      if(minCount) {
        if(parseInt(minCount) > parseInt(value)) {
          throw new Error(ERR_DETAILS["maxCount-not-correct"])
        } else {
          return true
        }
      } else {
        return true
      }
    })
  ]
}