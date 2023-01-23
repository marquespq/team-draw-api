import { Router } from 'express';
import { createUserHandler } from '../../controllers/user.controller';
import validateResource from '../../middlewares/validateResource';
import { createUserSchema } from '../../schemas/user.schema';

const routes = Router();

routes.post('/', validateResource(createUserSchema), createUserHandler);

export default routes;
