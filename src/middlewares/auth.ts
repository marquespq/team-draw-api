import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import { findUserById } from '../services/user.service';

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

const promiseVerifyToken = (token: string, key: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, key, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

async function isTokenValid(token: string): Promise<any> {
  try {
    if (!token) return false;

    const jwtToken = token.replace('Bearer ', '').trim();

    const tokenContent = await promiseVerifyToken(
      jwtToken,
      config.jwtKey as string
    );

    return tokenContent;
  } catch (error) {
    return false;
  }
}

export async function auth(req: Request, _res: Response, next: NextFunction) {
  const token = req.headers.authorization as any;

  if (!token) {
    throw new Error('Acesso negado');
  }

  const isValid = await isTokenValid(token);

  if (!isValid) {
    throw new Error('Acesso negado');
  }

  let user;

  try {
    user = await findUserById(isValid.sub);
  } catch (error) {
    throw new Error('Usuario não existe');
  }

  const filterUser = {
    user,
  };

  req.user = filterUser;

  next();
}
