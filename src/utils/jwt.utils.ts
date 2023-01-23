import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import config from '../config/config';
import logger from '../config/logger';

// const privateKey = Buffer.from(config.privateKey, 'base64').toString('ascii');
// const publicKey = Buffer.from(config.publicKey, 'base64').toString('ascii');

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  const opts = { ...options, algorithm: 'HS256' } as SignOptions;
  return jwt.sign(object, config.jwtSecret as Secret, opts);
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, config.jwtSecret as Secret);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    logger.error(e);
    return {
      valid: false,
      expired: e.message === 'jwt expired',
      decoded: null,
    };
  }
}
