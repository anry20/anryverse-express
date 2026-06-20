import { AppError } from '#src/middlewares/errorHandler'
export const unknownRouteHandler = () => {
  throw new AppError('Unknown Route', 404)
}
