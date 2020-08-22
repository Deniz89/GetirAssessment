const rateLimit = require('express-rate-limit')

const fetchRecords = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 1200, // Max 1200 requests
  message: "Too many fetch record requests have been received. Wait for 5 minutes."
})

module.exports = {
  fetchRecords
}