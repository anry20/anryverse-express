import type { Request, Response, NextFunction } from 'express'

export class AppError extends Error {
  public status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status

    Object.setPrototypeOf(this, AppError.prototype)
    Error.captureStackTrace(this, this.constructor)
  }
}

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const status = err instanceof AppError ? err.status : 500
  const message = err.message || 'Internal Server Error'

  console.error(`[Error] Status ${status}: ${message}`)

  let cleanStack: string | undefined = undefined

  if (process.env.NODE_ENV === 'development' && err.stack) {
    cleanStack = err.stack
      .split('\n')
      .filter((line) => !line.includes('node_modules') && !line.includes('node:internal'))
      .join('\n')
  }

  res.status(status).json({
    success: false,
    message,
    stack: cleanStack,
  })
}
