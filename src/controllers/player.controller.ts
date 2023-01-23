import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { create, findAll, update } from '../services/player.service';

export async function createPlayerHandler(req: Request, res: Response) {
  const player = await create(req.body);
  return res.status(StatusCodes.OK).json(player);
}

export async function getPlayersHandler(req: Request, res: Response) {
  const players = await findAll({});

  res.status(StatusCodes.OK).json(players);
}

export async function updatePlayersHandler(req: Request, res: Response) {
  const team = await update(req.body);
  return res.status(StatusCodes.OK).json(team);
}
