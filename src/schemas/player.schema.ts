import * as yup from 'yup';
import { Positions, Level } from '../models/player.model';

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
    level: yup
      .string()
      .oneOf(
        Object.values(Level),
        `Nível deve ser: ${Object.values(Level).join(' ou ')}`
      )
      .required('Level is required'),
    _id: yup.string(),
  }),
});

export type CreatePlayerSchema = yup.InferType<typeof playerSessionSchema>;
