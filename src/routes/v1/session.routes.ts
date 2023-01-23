import { Router } from 'express';
import { createUserSessionHandler } from '../../controllers/session.controller';
import { createSessionSchema } from '../../schemas/session.schema';
import validateResource from '../../middlewares/validateResource';
import catchAsync from '../../utils/catchAsync.utils';

const routes = Router();

routes
  .route('/')
  .post(
    validateResource(createSessionSchema),
    catchAsync(createUserSessionHandler)
  );

export default routes;
