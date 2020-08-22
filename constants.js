// All possible codes used in responses
const RETURN_CODES = {
  success: 0,
  db_error: -1,
  param_error: -2
}

// All possible messages used in reponses
// For error cases, detailed error explanations have been used
const RETURN_MSG = {
  success: "Success"
}

// Error details used in parameter validation errors.
const ERR_DETAILS = { 
  "startDate-not-valid": "startDate format should be 'YYYY-MM-DD', e.g. '2015-06-23'.",
  "endDate-not-valid": "endDate format should be 'YYYY-MM-DD', e.g. '2015-06-23'.",
  "endDate-not-correct": "endDate should be after startDate.",
  "minCount-not-valid": (min, max) => (
    "minCount should be a number between " + min + " and " + max
  ),
  "maxCount-not-valid": (min, max) => (
    "maxCount should be a number between " + min + " and " + max
  ),
  "maxCount-not-correct": "maxCount should be larger then minCount."
}

module.exports = {
  RETURN_CODES,
  RETURN_MSG,
  ERR_DETAILS
}