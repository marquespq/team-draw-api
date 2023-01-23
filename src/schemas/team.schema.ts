import * as yup from 'yup';

export const teamSessionSchema = yup.object({
  body: yup.object({
    name: yup.string().required('Name is required'),
    players: yup.array(),
  }),
});

export type TeamSchema = yup.InferType<typeof teamSessionSchema>;
