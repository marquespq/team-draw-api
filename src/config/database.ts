import mongoose from 'mongoose';
import config from './config';
import logger from './logger';

async function database() {
  try {
    const { url, options } = config.mongoDb;
    await mongoose.connect(url, options);
    logger.info('Mongo connected');
  } catch (error) {
    logger.error('Could not connect to db');
    logger.error(error);
    process.exit(1);
  }
}

export default database;
