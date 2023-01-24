import { Router } from 'express';
import {
  createTeamHandler,
  getTeamsHandler,
  sortTeamHandler,
  updateTeamHandler,
} from '../../controllers/team.controller';
import { teamSessionSchema } from '../../schemas/team.schema';
import validateResource from '../../middlewares/validateResource';
import catchAsync from '../../utils/catchAsync.utils';
import { auth } from '../../middlewares/auth';

const routes = Router();

routes
  .route('/')
  .post(
    catchAsync(auth),
    validateResource(teamSessionSchema),
    catchAsync(createTeamHandler)
  )
  .get(catchAsync(auth), getTeamsHandler)
  .put(
    catchAsync(auth),
    validateResource(teamSessionSchema),
    catchAsync(updateTeamHandler)
  );
routes.route('/:id').get(catchAsync(auth), sortTeamHandler);

export default routes;
