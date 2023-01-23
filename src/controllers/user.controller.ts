import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CreateUserInput } from '../schemas/user.schema';
import { createUser } from '../services/user.service';
import logger from '../config/logger';

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput['body']>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    res.status(StatusCodes.CREATED).json(user);
  } catch (e: any) {
    logger.error(e);
    res.status(StatusCodes.CONFLICT).send(e.message);
  }
}
