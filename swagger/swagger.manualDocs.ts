import { Router } from 'express'
const router = Router()

router.post('/api/auth/sign-in/email', () => {
  /* #swagger.tags = ['Authentication']
     #swagger.summary = 'Sign in with email'
     #swagger.description = 'Authenticates the user and returns an HTTP-only session cookie.'
     #swagger.security = []
     #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email", "password"],
              properties: {
                email: {
                  type: "string",
                  example: "user@school.com"
                },
                password: {
                  type: "string",
                  example: "SecurePassword123"
                }
              }
            }
          }
        }
     }
     #swagger.responses[200] = {
        description: 'Login successful'
     }
     #swagger.responses[400] = {
        description: 'Validation error'
     }
     #swagger.responses[401] = {
        description: 'Invalid credentials'
     }
  */
})

export default router
