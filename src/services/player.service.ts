import { PlayerInput } from '../models/player.model';
import PlayerRepository from '../repositories/PlayerRepository';

export async function create(input: PlayerInput) {
  const player = await PlayerRepository.createPlayer(input);
  return player;
}

export async function findPlayerById(id: string) {
  const player = await PlayerRepository.findById(id);
  return player;
}

export async function findAll(query: any) {
  const player = await PlayerRepository.index(query);
  return player;
}

export async function update(input: PlayerInput) {
  const team = await PlayerRepository.updatePlayer(input);
  return team;
}
