import express from "express";
import cors from "cors";
import helmet from "helmet";
import templateRoutes from "./src/routes/templateRoutes";
import { errorHandler } from "./src/middlewares/errorHandler";
import { unknownRouteHandler } from "./src/middlewares/unknownRouteHandler";

const app = express();

// Security Headers
app.use(helmet());
app.use(cors());

//Json Body Parser
app.use(express.json());

//API Routes
app.use("/api/v1/templates", templateRoutes);

//Middlewares
app.use(unknownRouteHandler);
app.use(errorHandler);

export default app;