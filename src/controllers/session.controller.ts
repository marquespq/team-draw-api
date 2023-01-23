import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createSession } from '../services/session.service';
import { validatePassword } from '../services/user.service';

export async function createUserSessionHandler(req: Request, res: Response) {
  const user = await validatePassword(req.body);

  if (!user) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send('Invalid email or password');
  }
  const { _id: userId } = user;

  const session = await createSession(
    userId.toString(),
    req.get('user-agent') || ''
  );

  return res.json(session);
}
