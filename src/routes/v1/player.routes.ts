import { Router } from 'express';
import { createPlayerHandler } from '../../controllers/player.controller';
import { playerSessionSchema } from '../../schemas/player.schema';
import validateResource from '../../middlewares/validateResource';
import catchAsync from '../../utils/catchAsync.utils';
import { auth } from '../../middlewares/auth';

const routes = Router();

routes
  .route('/')
  .post(
    catchAsync(auth),
    validateResource(playerSessionSchema),
    catchAsync(createPlayerHandler)
  );

export default routes;
