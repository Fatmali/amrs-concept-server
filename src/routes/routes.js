const db = require('../connection/database');
const config = require('../config/config');


var checkServerIsUp = function(request, reply){
    return reply('Server is up and running');
};


var routes = [
    {
        method: 'GET',
        path: '/',
        handler: function(req, reply){
            return reply(`Server is up and running`);
        }
    },
    {
        method: 'GET',
        path: '/concept_id',
        handler: function(request, reply){
            db.query(`SELECT * from ${config.database.table}`, function(err, results, fields){
                if(err) { throw err; }
                reply(results, fields)
            });
        }
    },
    {
        method: 'GET',
        path: '/concept_id/{uuid}',
        handler: function(request, reply){
            db.query(`SELECT * from ${config.database.table} where uuid="${request.params.uuid}"`, function(err, results, fields){
                if(err) { throw err; }
                reply(results[0], fields);
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