# AI Coding Guidelines for Node Express Demo

## Architecture Overview
This is a minimal Node.js Express application demonstrating basic routing and server setup. The entire application logic resides in `app.js`, which creates an Express server listening on port 8080 with two routes:
- `GET /`: Returns "Hello World!"
- `GET /api/:id`: Returns a string with the provided ID

No database, middleware, or complex components are used. The app is designed for quick deployment demos via Northflank.

## Development Workflows
- **Install dependencies**: Run `yarn install` (preferred) or `npm install`
- **Start server**: Execute `yarn start` or `npm run start` to launch on `http://localhost:8080`
- **Containerization**: Use `Dockerfile` for building images; note that the container exposes port 80, but the app listens on 8080 internally

## Code Conventions
- Use `const` for requiring modules (e.g., `const express = require('express')`)
- Define routes with arrow functions: `app.get('/', (req, res) => { ... })`
- Hardcode the port as `const port = 8080;` without environment variable support
- No error handling or logging beyond basic console output

## Dependencies and Integrations
- **Express**: Core framework for routing and server management
- No external APIs, databases, or third-party services integrated
- Uses Yarn for package management, with `yarn.lock` for dependency locking

## Key Files
- `app.js`: Main application entry point with server and routes
- `package.json`: Defines start script and Express dependency
- `Dockerfile`: Multi-stage build using Node 18 Alpine for containerization