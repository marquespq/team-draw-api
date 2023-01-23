import { TeamInput } from '../models/team.model';
import TeamRepository from '../repositories/TeamRepository';

export async function create(input: TeamInput) {
  const player = await TeamRepository.createTeam(input);
  return player;
}
