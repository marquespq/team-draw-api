import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { create } from '../services/player.service';

export async function createPlayerHandler(req: Request, res: Response) {
  const player = await create(req.body);
  return res.status(StatusCodes.OK).json(player);
}
