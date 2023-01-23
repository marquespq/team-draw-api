import { format, createLogger, transports } from 'winston';
import config, { environments } from './config';

const logFormat = format.printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

export default createLogger({
  level: config.env === environments.DEVELOPMENT ? 'debug' : 'error',
  format:
    config.env === environments.DEVELOPMENT
      ? format.combine(
          format.colorize(),
          format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
          format.errors({ stack: true }),
          logFormat
        )
      : format.combine(
          format.timestamp(),
          format.errors({ stack: true }),
          format.json()
        ),
  defaultMeta: { service: 'team-draw' },
  transports: [new transports.Console()],
});
