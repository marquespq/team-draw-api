import { object, string, InferType } from 'yup';

export const createUserSchema = object({
  body: object({
    name: string().required('Name is required'),
    password: string()
      .required('Password is required')
      .min(6, 'Password too short - should be 6 chars minimum'),
    passwordConfirmation: string().required(
      'Password Confirmation is required'
    ),
    email: string().required('Email is required').email('Not a valid email'),
  }),
});

export type CreateUserInput = Omit<
  InferType<typeof createUserSchema>,
  'body.passwordConfirmation'
>;
