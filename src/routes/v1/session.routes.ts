import { Router } from 'express';
import {
  createUserSessionHandler,
  getUserSessionsHandler,
  deleteSessionHandler,
} from '../../controllers/session.controller';
import { createSessionSchema } from '../../schemas/session.schema';
import requireUser from '../../middlewares/requireUser';
import validateResource from '../../middlewares/validateResource';

const routes = Router();

routes
  .route('/')
  .post(validateResource(createSessionSchema), createUserSessionHandler)
  .get(requireUser, getUserSessionsHandler)
  .delete(requireUser, deleteSessionHandler);

export default routes;
