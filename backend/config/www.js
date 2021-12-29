const process = require('process');
const http = require('http');
const app = require('../server');

function normalizePort(val) {
  const port = Number(val);

  if (Number.isNaN(port)) return val;

  if (port >= 0) return port;

  return false;
}

const port = normalizePort(process.env.PORT || '5000');
const server = http.createServer(app);

app.set('port', port);

server.listen(port);

server.on('error', (error) => {
  if (error.syscall !== 'listen') throw error;

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.on('SIGINT', () => {
        process.exit(1);
      });
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.on('SIGINT', () => {
        process.exit(1);
      });
      break;
    default:
      console.log('Other error');
  }
});

server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind} http://localhost:${port}`);
});
