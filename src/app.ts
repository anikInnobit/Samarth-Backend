import http from 'http';
import expressServer from './server';
import connectPSQlDb from './config/dbConnection';
import { logger } from './common/logger';


// Normalize port number which will expose server
const port = normalizePort(Number(process.env.PORT));

// Instantiate the expressServer class
const expressInstance = new expressServer().expressInstance;

// Make port available within server
expressInstance.set('port', port);

// Create the HTTP Express Server
export const server = http.createServer(expressInstance);


// Start listening on the specified Port (Default: 3000)
server.listen(port, () => {
    logger.log("info",`listening on port ${port}`,{module:"app.ts"});
});


expressInstance.get('/', (req, res) => {
    res.send(`Server Running on port : ${port}`)
 })


connectPSQlDb();

// Port Normalization
function normalizePort(val: number | string): number | string | boolean {
  const port: number = typeof val === 'string' ? parseInt(val, 10) : val;
  if (isNaN(port)) {
      return val;
  } else if (port >= 0) {
      return port;
  } else {
      return false;
  }
}