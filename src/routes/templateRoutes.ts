import { Router } from 'express'
import {
  createMessage,
  deleteMessage,
  getMessage,
  getMessages,
  updateMessage,
} from '#src/controllers/templateController'

const router = Router()

router.get('/messages', getMessages /*, #swagger.summary = 'Retrieve a list of all messages' */)
router.get('/messages/:id', getMessage /*, #swagger.summary = 'Retrieve a single message by ID' */)
router.post('/messages', createMessage /*, #swagger.summary = 'Create a new message' */)
router.delete('/messages/:id', deleteMessage /*, #swagger.summary = 'Delete a message by ID' */)
router.put('/messages/:id', updateMessage /*, #swagger.summary = 'Update a message by ID' */)

export default router
