import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const router = Router()

// ESM-compatible directory resolution
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

try {
  const swaggerFile = path.resolve(__dirname, '../swagger/swagger-output.json')

  const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFile, 'utf8'))
  router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
} catch {
  console.error(
    'Swagger file not found at:',
    path.resolve(__dirname, '../swagger/swagger-output.json'),
  )
}

export default router
