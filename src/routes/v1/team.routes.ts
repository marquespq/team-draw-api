import { Router } from 'express';
import { createTeamHandler } from '../../controllers/team.controller';
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
  );

export default routes;
