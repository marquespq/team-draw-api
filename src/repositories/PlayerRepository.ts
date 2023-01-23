import PlayerModel, { PlayerInput } from '../models/player.model';

export default class PlayerRepository {
  static async index(query: any): Promise<any> {
    const players = await PlayerModel.find({ query: query || '' });
    return players;
  }

  static async createPlayer(input: PlayerInput) {
    const player = await PlayerModel.create(input);
    return player;
  }

  static async delete(_id: string): Promise<any> {
    const remove = await PlayerModel.findByIdAndRemove(_id);

    return remove;
  }

  static async findById(id: string): Promise<any> {
    const player = await PlayerModel.findById(id);
    return player;
  }

  static async updatePlayer(input: PlayerInput): Promise<any> {
    // eslint-disable-next-line no-underscore-dangle
    const id = { _id: input?._id };
    const newValues = {
      name: input.name,
      position: input.position,
      level: input.level,
    };

    const updateResult = await PlayerModel.findOneAndUpdate(id, newValues, {
      returnOriginal: false,
    });

    return updateResult;
  }
}
