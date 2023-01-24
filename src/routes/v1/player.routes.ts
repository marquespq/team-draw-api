import { Router } from 'express';
import {
  createPlayerHandler,
  getPlayersHandler,
  updatePlayersHandler,
  getPlayerById,
} from '../../controllers/player.controller';
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
  )
  .get(catchAsync(auth), getPlayersHandler)
  .put(
    catchAsync(auth),
    validateResource(playerSessionSchema),
    catchAsync(updatePlayersHandler)
  );
routes.route('/:id').get(catchAsync(auth), catchAsync(getPlayerById));
export default routes;
