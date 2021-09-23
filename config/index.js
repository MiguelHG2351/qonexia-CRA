export default {
    db: {
        host: process.env.DB_HOST || 'localhost',
        dbName: process.env.DB_NAME || 'test',
        userDB: process.env.DB_USER || 'root',
        passwordDB: process.env.DB_PASSWORD || '',
    }
}
