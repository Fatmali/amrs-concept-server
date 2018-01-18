const Hapi = require('hapi');
const config = require('./src/config/config');
const routes = require('./src/routes/routes');
const tls = require('tls');

const server = new Hapi.Server();

var tls_config = false;

if (config.app.tls) {
    tls_config = tls.createServer({
        key: fs.readFileSync(config.app.key),
        cert: fs.readFileSync(config.app.cert)
    });
}

var plugins = [
    {register: routes, options:{}}
    
];
server.connection({
    host: config.app.host,
    port: config.app.port
});

server.register(plugins,(err) => {
    if(err){ throw err; }
});

    server.start((err) => {
        if(err){ throw err;} 
        console.log(`Server running at ${server.info.uri}`);
});
