import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CreateUserInput } from '../schemas/user.schema';
import { createUser, findAll } from '../services/user.service';

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput['body']>,
  res: Response
) {
  const user = await createUser(req.body);
  res.status(StatusCodes.CREATED).json(user);
}

export async function getUsersHandler(req: Request, res: Response) {
  const users = await findAll({});

  res.status(StatusCodes.OK).json(users);
}
