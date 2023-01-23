import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import config, { environments } from './config/config';
import logger from './config/logger';
import database from './config/database';
import routes from './routes';
import deserializeUser from './middlewares/deserializeUser';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(cors());
app.options('*', cors());
app.use(deserializeUser);

if (config.env !== environments.PRODUCTION) {
  app.use(morgan('tiny'));
}

app.listen(config.port, async () => {
  logger.info(`API rodando em http://${config.publicUrl}:${config.port}`);

  await database();

  routes(app);
});

export default app;
