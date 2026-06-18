import app from "@/app";
import config from "@/src/config/config";

const server = app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
  console.log(`Environment: ${config.nodeEnv}`);
});

server.on("error", (error: NodeJS.ErrnoException) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  switch (error.code) {
    case "EADDRINUSE":
      console.error(`Port ${config.port} is already in use. Please check if another process is running.`);
      process.exit(1);
      break;
    default:
      console.error(`Server error:`, error);
      throw error;
  }
});