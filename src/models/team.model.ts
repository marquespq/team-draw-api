import mongoose, { Schema } from 'mongoose';
import UserModel, { UserDocument } from './user.model';

export interface TeamDocument extends mongoose.Document {
  user: UserDocument['_id'];
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamInput {
  name: string;
  players: any;
}

const teamSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: UserModel },
    name: { type: String, required: true },
    players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
  },
  {
    timestamps: true,
  }
);

const TeamModel = mongoose.model<TeamDocument>('Team', teamSchema);

export default TeamModel;
