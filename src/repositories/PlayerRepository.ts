import PlayerModel, { PlayerInput } from '../models/player.model';

export default class PlayerRepository {
  static async createPlayer(input: PlayerInput) {
    const user = await PlayerModel.create(input);
    return user;
  }
}
