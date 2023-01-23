import { UserInput } from '../models/user.model';
import UserRepository from '../repositories/UserRepository';

export async function createUser(input: UserInput) {
  const user = await UserRepository.createUser(input);
  return user;
}

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await UserRepository.validatePassword(email, password);
  return user;
}

export async function findUserById(id: string) {
  const user = await UserRepository.findById(id);
  return user;
}

export async function findAll(query: any) {
  const user = await UserRepository.index(query);
  return user;
}
