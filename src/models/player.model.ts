import { Schema, model } from 'mongoose';

export enum Positions {
  GOLEIRO = 'GOLEIRO',
  ZAGUEIRO = 'ZAGUEIRO',
  MEIO = 'MEIO',
  ATACANTE = 'ATACANTE',
}

export interface PlayerInput {
  name: string;
  position: string;
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
  },
  {
    timestamps: true,
  }
);

const PlayerModel: any = model('Player', PlayerSchema);

export default PlayerModel;
