import app from './app'
import config from '#src/config'

const server = app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`)
  console.log(`Environment: ${config.nodeEnv}`)
})

// Handle startup errors
server.on('error', (error: NodeJS.ErrnoException) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  switch (error.code) {
    case 'EADDRINUSE':
      console.error(
        `Port ${config.port} is already in use. Please check if another process is running.`,
      )
      process.exit(1)
      break
    default:
      console.error(`Server error:`, error)
      throw error
  }
})

// Graceful Shutdown Handler
const gracefulShutdown = (signal: string) => {
  console.log(`\nReceived ${signal}. Shutting down gracefully...`)

  // Stop accepting new connections
  server.close(() => {
    console.log('HTTP server closed.')

    console.log('Process terminated.')
    process.exit(0)
  })

  // Force shutdown if it takes too long
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down.')
    process.exit(1)
  }, 10000)
}

process.on('SIGINT', () => gracefulShutdown('SIGINT')) // Triggered by Ctrl+C
process.on('SIGTERM', () => gracefulShutdown('SIGTERM')) // Triggered by killing the terminal/process
