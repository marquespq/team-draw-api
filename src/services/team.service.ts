import { shuffle } from 'lodash';
import { TeamInput } from '../models/team.model';
import TeamRepository from '../repositories/TeamRepository';
import { balancedFunction } from '../utils/balancedInput.utils';
import { distribute } from '../utils/sortTeam.utils';

export interface IPlayer {
  _id: string;
  name: string;
  position: string;
  level: string | number;
}

export interface ITeams {
  _id: string;
  name: string;
  players: IPlayer[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export async function create(input: TeamInput) {
  const team = await TeamRepository.createTeam(input);
  return team;
}

export async function findTeamById(id: string) {
  const team = await TeamRepository.findById(id);
  return team;
}

export async function sortTeam(id: string) {
  const team = await TeamRepository.findById(id);

  const filterTeam = team.players.map((player: IPlayer) => {
    const balanced = balancedFunction(player.level);

    return { name: player.name, position: player.position, level: balanced };
  });

  const shuffleArray = shuffle(filterTeam);

  const teams = distribute(shuffleArray);

  const [firstTeam, secondTeam] = teams.slice(0, 2);

  return { firstTeam, secondTeam };
}

export async function findAll(query: any) {
  const team = await TeamRepository.index(query);
  return team;
}

export async function update(input: TeamInput) {
  const team = await TeamRepository.updateTeam(input);
  return team;
}
