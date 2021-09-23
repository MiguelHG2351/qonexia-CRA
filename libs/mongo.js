import mongoose from 'mongoose'
import config from '../config/index'

const userDB = config.db.userDB
const password = config.db.passwordDB
const host = config.db.host
const dbName = config.db.dbName

console.log(userDB, password, host)

const mongoURI = `mongodb+srv://${userDB}:${password}@${host}/${dbName}?retryWrites=true&w=majority`

class MongoLib {
    constructor() {
        if (!MongoLib.connection) {
            this.connection = mongoose.connect(mongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            })
        }
    }
}

export default MongoLib
