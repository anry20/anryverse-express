import swaggerAutogen from 'swagger-autogen'
import { config } from '#src/config'

const autogenOptions = { openapi: '3.0.0' }

const doc = {
  info: {
    version: '1.0.0',
    title: 'CogniScribe API',
    description: 'Auto-generated API documentation',
  },
  servers: [{ url: `http://localhost:${config.port}` }],

  // API tags can be added here.
  tags: [
    {
      name: 'Messages',
      description: 'Endpoints for managing messages',
    },
  ],

  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [{ bearerAuth: [] }],
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['../app.ts', './swagger.manualDocs.ts']

swaggerAutogen(autogenOptions)(outputFile, endpointsFiles, doc).then(() => {
  console.log('Swagger JSON generated successfully!')
})
