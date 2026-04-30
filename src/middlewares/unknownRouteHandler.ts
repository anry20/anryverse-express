import { Request, Response, NextFunction } from 'express';
import { AppError } from './errorHandler';

export const unknownRouteHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  throw new AppError("Unknown Route", 404);
};
