const app = require('../src/app');
const http = require('http');
const serveStatic = require('serve-static');

// const port = 0;
const port = normalizePort(process.env.PORT || 3000 );;

app.set('port',port);

// app.use(serveStatic(__dirname + client));

const server = http.createServer(app);


 

server.listen(port);

server.on('error', onError);
server.on('listening', onListening);

console.log('API rodando na porta '+port);

function normalizePort(val){

    // var validAddr = function(addr) {
// 	var port = Number(addr.split(':')[1]);
// 	return port > 0 && port < 65535;
// };

    try{
        if( val > 0 && val < 65535){
            return val ;
        }
        else{
            return 0;
        }
    }
    catch(err){
        return 0;
    }
    
}

function onError(error){

    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port ;

    switch(error.code){
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port ;

}

// var validAddr = function(addr) {
// 	var port = Number(addr.split(':')[1]);
// 	return port > 0 && port < 65535;
// };