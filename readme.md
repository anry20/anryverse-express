# Anryverse Express Backend Template

A robust, production-ready, minimal Express.js template for quick API and backend project bootstrapping. Built with TypeScript, it includes built-in security features, centralized error handling, and auto-generated Swagger documentation.

## 🚀 Features

- **TypeScript Support**: Strongly typed codebase with strict TypeScript configurations.
- **API Documentation (Swagger)**: Auto-generated OpenAPI 3.0 documentation using `swagger-autogen`, served visually via `swagger-ui-express`.
- **Security First**: Pre-configured with `helmet` for security headers and `cors` for cross-origin resource sharing.
- **Centralized Error Handling**: Custom `AppError` class for operational errors, stack-trace cleanup in development, and a dedicated unknown route (404) handler.
- **Graceful Shutdown**: Properly handles `SIGINT`, `SIGTERM`, and `EADDRINUSE` to cleanly close server connections.
- **Environment Validation**: Strict checks to ensure required environment variables (like `PORT` and `NODE_ENV`) are present before booting up.
- **Linting & Formatting**: Pre-configured with ESLint and Prettier for consistent code quality.
- **Node Version Manager**: `.nvmrc` included to enforce Node `v24.6.0`.
- **Database Ready**: Includes `pg` (PostgreSQL client) dependency, ready for your database wiring.

## 📁 Project Structure

```text
anryverse-express/
├── src/
│   ├── config/           # Environment variable validation & loading
│   ├── controllers/      # Route logic and request handling
│   ├── middlewares/      # Custom Express middlewares (Errors, 404s)
│   ├── models/           # Data models / interfaces
│   └── routes/           # API route definitions
├── swagger/              # Swagger UI setup and auto-generation script
├── app.ts                # Express app initialization and middleware registration
└── server.ts             # Server entry point and graceful shutdown logic
```

## 🛠️ Requirements

- Node.js (v24.6.0 recommended via `.nvmrc`)
- pnpm (v10+)

## 📦 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/anry20/anryverse-express.git
cd anryverse-express
```

2. Install dependencies:

```bash
pnpm install
```

3. Environment configuration:
   Copy the example environment file and adjust the values. The application will not start if required variables are missing.

```bash
# Unix / macOS:
cp .env.example .env

# Windows CMD:
copy .env.example .env
```

4. Start the development server:

```bash
pnpm run dev
```

## ⚙️ Environment Variables

The application requires specific environment variables to run. By default, these are:

| Variable | Description                                              | Default     |
| -------- | -------------------------------------------------------- | ----------- |
| PORT     | The TCP port the server listens on.                      | 3000        |
| NODE_ENV | The runtime environment (`development` or `production`). | development |

> Note: Swagger documentation is only served when `NODE_ENV=development`.

## 📜 Available Scripts

- `pnpm run dev` — Starts the development server using nodemon. Automatically generates the Swagger JSON before starting.
- `pnpm run build` — Generates Swagger docs, compiles TypeScript into the `dist/` folder, and resolves path aliases.
- `pnpm start` — Starts the compiled production build (`node dist/server.js`).
- `pnpm run swagger` — Manually triggers the Swagger JSON auto-generation.
- `pnpm run lint` — Runs ESLint to check and fix code quality issues.

## 📖 Swagger API Documentation

This template uses `swagger-autogen` to automatically generate documentation based on your endpoints.

- **Accessing the UI**: While running `pnpm run dev`, visit `http://localhost:3000/api-docs` in your browser.
- **Updating Docs**: Swagger is configured to read comments in your route definitions. For example:

```ts
router.get('/messages', getMessages /* #swagger.summary = 'Retrieve a list of all messages' */)
```

Every time you run the dev or build scripts, the `swagger-output.json` is updated automatically.

## 🚨 Error Handling

Use the included `AppError` class inside your controllers to throw predictable operational errors:

```ts
import { AppError } from '@/src/middlewares/errorHandler'

export const myController = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    if (!id) {
      throw new AppError('ID is required', 400) // Handled automatically by the middleware
    }
    // ...
  } catch (error) {
    next(error)
  }
}
```

## 📄 License

This project is licensed under the MIT License.
Copyright (c) 2025 Jojhel Anry L. Carrascal
