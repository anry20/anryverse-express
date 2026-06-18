import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { config } from '@/src/config'
import templateRoutes from '@/src/routes/templateRoutes'
import swaggerMiddleware from '@/swagger'
import { errorHandler } from '@/src/middlewares/errorHandler'
import { unknownRouteHandler } from '@/src/middlewares/unknownRouteHandler'

const app = express()

// Security Headers
app.use(helmet())
app.use(cors())

// Json Body Parser
app.use(express.json())

// Swagger documentation available only in development environment
if (config.nodeEnv === 'development') {
  app.use('/api-docs', swaggerMiddleware)
}

// API Routes
app.use('/api/v1/templates', templateRoutes /* #swagger.tags = ['Messages'] */)

// Error Middlewares
app.use(unknownRouteHandler)
app.use(errorHandler)

export default app
