import { Express, Request, Response } from 'express';
import userRoutes from './v1/user.routes';
import sessionRoutes from './v1/session.routes';

function routes(app: Express) {
  app.get('/api/healthcheck', (req: Request, res: Response) =>
    res.sendStatus(200)
  );

  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/sessions', sessionRoutes);
}

export default routes;
