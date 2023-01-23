import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { create } from '../services/team.service';

export async function createTeamHandler(req: Request, res: Response) {
  const team = await create(req.body);
  return res.status(StatusCodes.OK).json(team);
}
