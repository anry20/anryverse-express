import type { Request, Response, NextFunction } from 'express'
import { AppError } from '#src/middlewares/errorHandler'
import { messages } from '#src/models/templateModel'

export const createMessage = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { message } = req.body

    if (typeof message !== 'string' || message.trim() === '') {
      throw new AppError('Message is required and must be a string', 400)
    }

    const newId = messages.length > 0 ? Math.max(...messages.map((m) => m.id)) + 1 : 1
    const newMessage = { id: newId, message }

    messages.push(newMessage)
    res.status(201).json(newMessage)
  } catch (error) {
    next(error)
  }
}

export const updateMessage = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { message } = req.body

    if (typeof message !== 'string' || message.trim() === '') {
      throw new AppError('Message is required and must be a string', 400)
    }

    const index = messages.findIndex((msg) => msg.id === parseInt(id))
    if (index === -1) {
      throw new AppError('Message not found', 404)
    }

    messages[index].message = message
    res.status(200).json(messages[index])
  } catch (error) {
    next(error)
  }
}

export const deleteMessage = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const index = messages.findIndex((msg) => msg.id === parseInt(id))

    if (index === -1) {
      throw new AppError('Message not found', 404)
    }

    messages.splice(index, 1)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

export const getMessages = (req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json(messages)
}

export const getMessage = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const message = messages.find((msg) => msg.id === parseInt(id))

    if (!message) {
      throw new AppError('Message not found', 404)
    }

    res.status(200).json(message)
  } catch (error) {
    next(error)
  }
}
