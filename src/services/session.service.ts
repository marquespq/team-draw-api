import jwt from 'jsonwebtoken';
import config from '../config/config';
import SessionRepository from '../repositories/SessionRepository';

export async function createSession(userId: string, userAgent: string) {
  const session = await SessionRepository.login(userId, userAgent);

  if (!session) {
    throw new Error('Login error');
  }

  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign({ sub: session._id }, config.jwtKey as string);

  return { token };
}
