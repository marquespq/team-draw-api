import { TeamInput } from '../models/team.model';
import TeamRepository from '../repositories/TeamRepository';

export async function create(input: TeamInput) {
  const team = await TeamRepository.createTeam(input);
  return team;
}

export async function findTeamById(id: string) {
  const team = await TeamRepository.findById(id);
  return team;
}

export async function findAll(query: any) {
  const team = await TeamRepository.index(query);
  return team;
}

export async function update(input: TeamInput) {
  const team = await TeamRepository.updateTeam(input);
  return team;
}
