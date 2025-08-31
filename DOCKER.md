# Docker Setup for FSociety Web Challenge

This document explains how to run the FSociety Web Challenge application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed on your system

## Quick Start

### Production Build

To run the application in production mode:

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

The application will be available at `http://localhost:3000`

### Development Mode

To run the application in development mode with hot reloading:

```bash
# Build and run development environment
docker-compose -f docker-compose.dev.yml up --build

# Or run in detached mode
docker-compose -f docker-compose.dev.yml up -d --build
```

## Manual Docker Commands

### Production

```bash
# Build the production image
docker build -t fsociety-web .

# Run the container
docker run -p 3000:3000 fsociety-web
```

### Development

```bash
# Build the development image
docker build -f Dockerfile.dev -t fsociety-web-dev .

# Run the development container
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules fsociety-web-dev
```

## Docker Commands

### View running containers
```bash
docker ps
```

### View logs
```bash
# Using docker-compose
docker-compose logs -f

# Using docker
docker logs <container_id>
```

### Stop containers
```bash
# Using docker-compose
docker-compose down

# Using docker
docker stop <container_id>
```

### Remove containers and images
```bash
# Remove containers and images
docker-compose down --rmi all

# Clean up all unused containers, networks, and images
docker system prune -a
```

## Environment Variables

The application can be configured using environment variables. Create a `.env` file in the root directory:

```env
NODE_ENV=production
GEMINI_API_KEY=your_api_key_here
```

## Health Check

The application includes a health check that runs every 30 seconds. You can check the health status:

```bash
docker inspect <container_id> | grep Health -A 10
```

## Troubleshooting

### Port already in use
If port 3000 is already in use, you can change the port mapping in `docker-compose.yml`:

```yaml
ports:
  - "3001:3000"  # Maps host port 3001 to container port 3000
```

### Permission issues
If you encounter permission issues, make sure Docker has the necessary permissions to access your project directory.

### Build issues
If the build fails, try cleaning up Docker cache:

```bash
docker system prune -a
docker volume prune
```

## Security Notes

- The production Dockerfile runs the application as a non-root user
- The container includes health checks for monitoring
- Development mode mounts volumes for hot reloading but should not be used in production
