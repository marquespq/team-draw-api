import TeamModel, { TeamInput } from '../models/team.model';

export default class TeamRepository {
  static async createTeam(input: TeamInput) {
    const user = await TeamModel.create(input);
    return user;
  }
}
