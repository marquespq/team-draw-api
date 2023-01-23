import { PlayerInput } from '../models/player.model';
import PlayerRepository from '../repositories/PlayerRepository';

export async function create(input: PlayerInput) {
  const player = await PlayerRepository.createPlayer(input);
  return player;
}
