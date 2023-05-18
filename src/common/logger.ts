// create a custom winston logger for amqp-ts
import * as winston from "winston";
import { format } from "winston";



const log = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'src/logs/error(%d-%b-%y).log', level: 'error' }),
      // new winston.transports.File({ filename: 'combined.log' , level:'info'}),
      new winston.transports.Console()
    ],
  });




  export var logger = log;
