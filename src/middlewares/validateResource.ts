import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AnyObjectSchema } from 'yup';
import pick from '../utils/pick.utils';

const validate =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validSchema = pick(schema.fields, ['params', 'query', 'body']);
      const object = pick(req, Object.keys(validSchema));
      await schema.validate(object, { abortEarly: false });
      next();
    } catch (e: any) {
      res.status(StatusCodes.BAD_REQUEST).send(e.errors);
    }
  };

export default validate;
