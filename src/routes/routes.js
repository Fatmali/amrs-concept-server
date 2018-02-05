import config from "../config/config";
import poolConnection from "../connection/database";

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: function (req, reply) {
            return reply(`AMRS Concept ID Server is up and running - This server helps to fetch concept IDS from OpenMRS tables.`);
        }
    },
    {
        method: 'GET',
        path: '/api/concepts',
        handler: function (request, reply) {
            poolConnection.getConnection((err, connection) => {
                if (err) {
                    connection.end();
                    console.log(err);
                    return;
                }
                connection.query(`SELECT * from ${config.database.table}`, function (err, results, fields) {
                    if (err) {
                        throw err;
                    }
                    reply(results, fields);
                    connection.release();
                });
            });
        }
    },
    {
        method: 'GET',
        path: '/api/{uuid}',
        handler: function (request, reply) {
            poolConnection.getConnection((err, connection) => {
                if (err) {
                    connection.end();
                    console.log(err);
                    return;
                }
                connection.query(`SELECT * from ${config.database.table} where uuid="${request.params.uuid}"`, function (err, results, fields) {
                    if (err) {
                        throw err;
                    }
                    reply(results, fields);
                    connection.release();
                });
            });
        }
    }
];

exports.register = function ( server, options, next) {
    server.route(routes);
    next();
    
};

exports.register.attributes = {
    name: 'routes'
};