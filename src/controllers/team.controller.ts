import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { create, findAll, update, sortTeam } from '../services/team.service';

export async function createTeamHandler(req: Request, res: Response) {
  const team = await create(req.body);
  return res.status(StatusCodes.OK).json(team);
}

export async function getTeamsHandler(req: Request, res: Response) {
  const teams = await findAll({});
  res.status(StatusCodes.OK).json(teams);
}

export async function updateTeamHandler(req: Request, res: Response) {
  const team = await update(req.body);
  return res.status(StatusCodes.OK).json(team);
}

export async function sortTeamHandler(req: Request, res: Response) {
  const team = await sortTeam(req.params.id);
  res.status(StatusCodes.OK).json(team);
}
