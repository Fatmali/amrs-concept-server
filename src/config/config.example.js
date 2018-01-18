var config = function() {
    var config = {
        app : {
            host: 'XXXXXX',
            port: 1234,
            key: 'XXXXXXX',
            cert: 'XXXXXXX',
            tls: false
        },

        database : {
            user : 'XXXXXX',
            password: 'XXXXXX',
            port: 1234,
            database: 'XXXXXX',
            table: 'concept'
        },

        server: {
            defaultHost: 'XXXXXX'
        }
    };

    if (!config.app.host) {
                throw new Error('Missing constant application.host.');
    } else if (!config.app.port) {
                throw new Error('Missing constant application.port.');
    }  else if (!config.database.user){
                throw new Error('Missing constant database.user.');
    } else if (!config.database.password) {
                throw new Error('Missing constant database.password.');
    } else if (!config.database.database) {
                throw new Error('Missing constant database.database.');
    }

        return config;
};
module.exports = config();
