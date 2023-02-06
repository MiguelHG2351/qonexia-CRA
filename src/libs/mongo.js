import { MongoClient, ObjectId } from 'mongodb'
import config from '../config'

const USER = encodeURIComponent(config.db.userDB)
const PASSWORD = encodeURIComponent(config.db.passwordDB)
const DB_NAME = config.db.dbName

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.db.host}/${DB_NAME}?retryWrites=true&w=majority`

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    this.dbName = DB_NAME
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect((err) => {
          if (err) {
            reject(err)
          }

          console.log('Connected succesfully to mongo')
          resolve(this.client.db(this.dbName))
        })
      })
    }

    return MongoLib.connection
  }

  getAll(collection, query) {
    return this.connect().then((db) => {
      const data = db.collection(collection).find(query).toArray()
      // console.log(`La query is:  ${data}`)
      return data
    })
  }

  get(collection, query) {
    return this.connect().then((db) => {
      return db.collection(collection).findOne(query)
    })
  }

  getById(collection, id) {
    return this.connect().then((db) => {
      return db.collection(collection).findOne({ _id: ObjectId(id) })
    })
  }

  create(collection, data) {
    return this.connect()
      .then((db) => {
        return db.collection(collection).insertOne(data)
      })
      .then((result) => result.insertedId)
  }

  update(collection, id, data) {
    return this.connect()
      .then((db) => {
        return db
          .collection(collection)
          .updateOne(
            { _id: ObjectId(id) },
            { $set: data },
            { upsert: true }
          )
      })
      .then((result) => result.upsertedId || id)
  }

  delete(collection, id) {
    return this.connect()
      .then((db) => {
        return db
          .collection(collection)
          .deleteOne({ _id: ObjectId(id) })
      })
      .then(() => id)
  }
}

export default MongoLib
