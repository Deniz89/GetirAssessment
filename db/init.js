require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;

const open = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(process.env.MONGODB_URL, { useUnifiedTopology: true })
    .then((client) => {
      resolve(client.db(process.env.MONGODB_NAME))
    })
    .catch((err) => {
      reject(err)
    })
  })
}

const close = (db) => {
  if(db) {
    db.close()
  }
}

module.exports = {
  open,
  close
}
