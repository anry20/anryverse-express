import dotenv from "dotenv";

dotenv.config();

const requiredEnvs = ["PORT", "NODE_ENV"];
for (const env of requiredEnvs) {
  if (!process.env[env]) {
    throw new Error(`Missing required environment variable: ${env}`);
  }
}

export const config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
};

export default config;