import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AnyObjectSchema, ValidationError } from 'yup';
import ApiReturnError from '../utils/apiError.utils';
import pick from '../utils/pick.utils';

const validate =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validSchema = pick(schema.fields, ['params', 'query', 'body']);
      const object = pick(req, Object.keys(validSchema));
      await schema.validate(object, { abortEarly: false });
      next();
    } catch (e: unknown) {
      if (e instanceof ValidationError) {
        res
          .status(StatusCodes.BAD_REQUEST)
          .json(new ApiReturnError({ payload: e.errors }));
      } else {
        res
          .status(StatusCodes.BAD_REQUEST)
          .json(new ApiReturnError({ payload: 'Erro na entrada de dados.' }));
      }
    }
  };

export default validate;
