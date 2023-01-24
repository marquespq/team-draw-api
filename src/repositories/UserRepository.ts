import { omit } from 'lodash';
import UserModel, { UserInput } from '../models/user.model';

export default class UserRepository {
  static async index(query: any): Promise<any> {
    const users = await UserModel.find({ query: query || '' });
    return users.flatMap((user) => omit(user.toJSON(), 'password'));
  }

  static async createUser(input: UserInput) {
    const user = await UserModel.create(input);
    return omit(user.toJSON(), 'password');
  }

  static async deleteUserById(_id: string): Promise<any> {
    const deleteUserById = await UserModel.findByIdAndRemove(_id);

    return deleteUserById;
  }

  static async getUserByEmail(email: string): Promise<any> {
    const user = await UserModel.findOne({ email });
    return user;
  }

  static async findById(resumeId: string): Promise<any> {
    const userResume = await UserModel.findById(resumeId);
    return userResume;
  }

  static async validatePassword(email: string, password: string): Promise<any> {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return false;
    }

    const isValid = await user.comparePassword(password);

    if (!isValid) return false;

    return omit(user.toJSON(), 'password');
  }
}
