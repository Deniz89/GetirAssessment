require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;

const open = () => {
  return new Promise((resolve, reject) => {
    // https://stackoverflow.com/questions/47662220/db-collection-is-not-a-function-when-using-mongoclient-v3-0
    // for 3.x versions of mongodb drivers, MongoClient's connect function only returns client object,
    // database object can be obtained from client
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
