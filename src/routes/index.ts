import { Express, Request, Response } from 'express';
import userRoutes from './v1/user.routes';
import sessionRoutes from './v1/session.routes';
import teamRoutes from './v1/team.routes';
import playerRoutes from './v1/player.routes';

function routes(app: Express) {
  app.get('/api/healthcheck', (req: Request, res: Response) =>
    res.sendStatus(200)
  );

  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/sessions', sessionRoutes);
  app.use('/api/v1/team', teamRoutes);
  app.use('/api/v1/player', playerRoutes);
}

export default routes;
