import { Router } from 'express';
import {
  createProductHandler,
  getProductHandler,
  updateProductHandler,
  deleteProductHandler,
  getProductsHandler,
} from '../../controllers/product.controller';
import requireUser from '../../middlewares/requireUser';
import validateResource from '../../middlewares/validateResource';

import {
  createProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema,
} from '../../schemas/product.schema';

const routes = Router();

routes
  .route('/')
  .get(getProductsHandler)
  .post(
    [requireUser, validateResource(createProductSchema)],
    createProductHandler
  );

routes
  .route('/:productId')
  .get(validateResource(getProductSchema), getProductHandler)
  .put(
    [requireUser, validateResource(updateProductSchema)],
    updateProductHandler
  )
  .delete(
    [requireUser, validateResource(deleteProductSchema)],
    deleteProductHandler
  );

export default routes;
