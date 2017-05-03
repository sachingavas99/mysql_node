var mysqlConnectionString = {
    connection: {
        dev: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'students'
        },
        qa: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'students'
        }
    }
}

module.exports.mysqlConnectionString = mysqlConnectionString;