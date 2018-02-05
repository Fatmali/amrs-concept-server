import config from "../config/config";
import mysql from "mysql";

const connections = function () {

    return mysql.createPool({
        host: config.database.host,
        port: config.database.port,
        user: config.database.user,
        password: config.database.password,
        database: config.database.database,
        multipleStatements: true
    });
};
module.exports = connections();

