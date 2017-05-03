var connectionProvider = require('../mysqlConnectionStringProvider.js');

var studentDao = {
    addStudent : function ( student, onCallBack ){
        var strInsert = "INSERT INTO student SET?";
        var studentDetails = {
            name: student.name,
            contactNo: student.contactNo
        };

        var connection = connectionProvider.mysqlCOnnectionStringProvider.getMysqlConnection();
        if( connection) {
            connection.query( strInsert, studentDetails, function(err, result){
                if( err ) { throw err }
                onCallBack({ status: 'successful' });
                console.log(result);
            } )
        }

    }
}