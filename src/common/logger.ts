// create a custom winston logger for amqp-ts
import * as winston from "winston";
import { format } from "winston";

import  chalk from 'chalk';

// Define colorizing format with custom colors for each log level
const colorFormat = format.printf(({ level, message,module }) => {
  let color;
  switch (level) {
    case 'info':
      color = chalk.white;
      break;
    case 'debug':
      color = chalk.yellow;
      break;
    case 'error':
      color = chalk.red;
      break;
    default:
      color = chalk.blue;
      break;
  }
  return color(`[${level.toUpperCase()}]:[Module:${module}] ${message}`);
});



const log = winston.createLogger({
    level: 'debug',
    format: colorFormat,
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      new winston.transports.File({ filename: 'src/logs/error(%d-%b-%y).log', level: 'error' }),
      // new winston.transports.File({ filename: 'combined.log' , level:'info'}),
      new winston.transports.Console()
    ],
  });




  export var logger = log;
