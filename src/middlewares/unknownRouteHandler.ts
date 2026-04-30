import { AppError } from './errorHandler';
export const unknownRouteHandler = (

) => {
  throw new AppError("Unknown Route", 404);
};
