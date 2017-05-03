var connectionProvider = require('../mysqlConnectionStringProvider.js');

var userDao = {
    addUser : function ( user, onCallBack ){
        var strInsert = "INSERT INTO users SET?";
        var userDetails = {
            userID: user.userId,
            password: user.password
        };

        var connection = connectionProvider.mysqlCOnnectionStringProvider.getMysqlConnection();
        if( connection) {
            connection.query( strInsert, userDetails, function(err, result){
                if( err ) { throw err }
                onCallBack({ status: 'successful' });
                console.log(result);
            } )
        }
    },
    authenticateUser : function ( user, onCallBack ){
        var strSelect = "SELECT * FROM users WHERE userId = '"+ user.userId +"' AND password = '"+ user.password +"'";

        var connection = connectionProvider.mysqlCOnnectionStringProvider.getMysqlConnection();
        if( connection) {
            connection.query( strSelect, function(err, rows, result){
                if( err ) { throw err }
                var objAuth = { status: false };
                if( rows.length == 1 ){
                    objAuth = { status: true, user: rows[0]  };
                }
                onCallBack( objAuth );
            } )
        }
    }
}

module.exports.userDao = userDao;