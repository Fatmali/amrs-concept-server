const mysql = require('mysql');
const config = require('../config/config');

var connection = function(){
    return mysql.createConnection({
        host : config.database.host,
        port: config.database.port,
        user : config.database.user,
        password : config.database.password,
        database: config.database.database,
        multipleStatements: true 
    });
};
module.exports = connection();
