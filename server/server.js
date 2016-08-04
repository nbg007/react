const Hapi = require('hapi');
const settings = require('config');

const routes = require('./routes');
const plugins = require('./plugins');

var server = new Hapi.Server({
    connections:{
        routes:{
            cors:settings.cors
        }
    }
});
server.connection({port:settings.port, host:settings.host});

//Register the plugins
server.register(plugins, function (err) {
    if (err) {
        throw err;
    }

    // Add routing
    server.route(routes);
    server.start(function(){
        console.log('Server started at: ' + server.info.uri);
    });
});

module.exports = server;
