import { Schema, model } from 'mongoose';

export enum Positions {
  GOLEIRO = 'GOLEIRO',
  ZAGUEIRO = 'ZAGUEIRO',
  MEIO = 'MEIO',
  ATACANTE = 'ATACANTE',
}

export enum Level {
  INICIANTE = 'INICIANTE',
  MEDIANO = 'MEDIANO',
  BOM = 'BOM',
  MUITO_BOM = 'MUITO_BOM',
  CRAQUE = 'CRAQUE',
}

export interface PlayerInput {
  name: string;
  position: string;
  _id?: string;
  level: string;
}

const PlayerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      required: true,
      enum: Object.values(Positions),
      type: String,
    },
    level: { required: true, enum: Object.values(Level), type: String },
  },
  {
    timestamps: true,
  }
);

const PlayerModel: any = model('Player', PlayerSchema);

export default PlayerModel;
