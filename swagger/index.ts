import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import fs from 'fs'
import path from 'path'

const router = Router()

try {
  const swaggerFile = path.join(__dirname, './swagger-output.json')

  const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFile, 'utf8'))

  router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
} catch (error) {
  console.warn('Swagger documentation file not found. Run the swagger script first!')
}

export default router
