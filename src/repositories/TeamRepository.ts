import TeamModel, { TeamInput } from '../models/team.model';

export default class TeamRepository {
  static async index(query: any): Promise<any> {
    const teams = await TeamModel.find({ query: query || '' }).populate({
      path: 'players',
      select: ['name', 'position', 'level'],
    });
    return teams;
  }

  static async delete(_id: string): Promise<any> {
    const team = await TeamModel.findByIdAndRemove(_id);
    return team;
  }

  static async createTeam(input: TeamInput) {
    const team = await TeamModel.create(input);
    return team;
  }

  static async findById(id: string): Promise<any> {
    const team = await TeamModel.findById(id).populate({
      path: 'players',
      select: ['name', 'position', 'level'],
    });
    return team;
  }

  static async updateTeam(input: TeamInput): Promise<any> {
    // eslint-disable-next-line no-underscore-dangle
    const id = { _id: input?._id };
    const newValues = { name: input.name, players: input.players };

    const updateResult = await TeamModel.findOneAndUpdate(id, newValues, {
      returnOriginal: false,
    });

    return updateResult;
  }
}
