---
description: Start the entire Hackathon platform locally using Docker Compose
---

This workflow starts all frontend and backend microservices locally.

// turbo-all
1. Navigate to the project root: `cd /Users/ramkich/projects/Hackathon`
2. Stop any existing containers: `docker-compose down`
3. Start the Postgres database and Discovery Server first to ensure they are ready before other services: `docker-compose up -d postgres discovery-server`
4. Wait 10 seconds for Eureka to start: `sleep 10`
5. Build and start the remaining backend services and the frontend React application: `docker-compose up -d --build`
6. Verify containers are running: `docker ps`
