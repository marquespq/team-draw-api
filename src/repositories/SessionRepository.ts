import SessionModel from '../models/session.model';

export default class SessionRepository {
  static async login(userId: string, userAgent: string): Promise<any> {
    const session = await SessionModel.create({ user: userId, userAgent });
    return session;
  }
}
