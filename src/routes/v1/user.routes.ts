import { Router } from 'express';
import {
  createUserHandler,
  getUsersHandler,
} from '../../controllers/user.controller';
import { auth } from '../../middlewares/auth';
import validateResource from '../../middlewares/validateResource';
import { createUserSchema } from '../../schemas/user.schema';
import catchAsync from '../../utils/catchAsync.utils';

const routes = Router();

routes
  .route('/')
  .post(validateResource(createUserSchema), createUserHandler)
  .get(catchAsync(auth), getUsersHandler);

export default routes;
