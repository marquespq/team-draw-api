import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import config from '../config/config';
import {
  createSession,
  findSessions,
  updateSession,
} from '../services/session.service';
import { validatePassword } from '../services/user.service';
import { signJwt } from '../utils/jwt.utils';

export async function createUserSessionHandler(req: Request, res: Response) {
  // Validate the user's password
  const user = await validatePassword(req.body);

  if (!user) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send('Invalid email or password');
  }
  const { _id: userId } = user;

  // create a session
  const session = await createSession(
    userId.toString(),
    req.get('user-agent') || ''
  );

  const { _id: sessionId } = session;

  const { accessTokenTtl, refreshTokenTtl } = config;

  // create an access token (15 minutes expire)
  const accessToken = signJwt(
    { ...user, session: sessionId },
    { expiresIn: accessTokenTtl }
  );

  // create a refresh token
  const refreshToken = signJwt(
    { ...user, session: sessionId },
    { expiresIn: refreshTokenTtl }
  );

  return res.json({ accessToken, refreshToken });
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const { _id: userId } = res.locals.user;

  const sessions = await findSessions({ user: userId, valid: true });

  res.send(sessions);
}

export async function deleteSessionHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session;

  await updateSession({ _id: sessionId }, { valid: false });

  res.send({ accessToken: null, refreshToken: null });
}
