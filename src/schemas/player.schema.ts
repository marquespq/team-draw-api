import * as yup from 'yup';
import { Positions } from '../models/player.model';

export const playerSessionSchema = yup.object({
  body: yup.object({
    name: yup.string().required('Name is required'),
    position: yup
      .string()
      .oneOf(
        Object.values(Positions),
        `Posição deve ser: ${Object.values(Positions).join(' ou ')}`
      )
      .required('Position is required'),
  }),
});

export type CreatePlayerSchema = yup.InferType<typeof playerSessionSchema>;
