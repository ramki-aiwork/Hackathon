# Hackathon Management Application 🚀

An enterprise-grade, full-stack Hackathon Management Platform built with **Spring Boot 3 Microservices**, **React (Vite)**, and orchestrated via **Docker & Kubernetes**.

This platform provides an end-to-end management portal for software development hackathons. It facilitates secure user authentication, event scheduling, team formation, project submissions, and judging integrations.

---

## 🏗️ Architecture Overview

The system is designed using a **Domain-Driven Design (DDD)** microservices architecture and deployed via multi-stage containers.

### Backend Tech Stack
- **Java 17 & Spring Boot 3.2**
- **Spring Cloud Gateway**: Primary entry point, handling routing and CORS.
- **Eureka server**: Native service discovery and registration.
- **PostgreSQL 15**: Primary relational data store.
- **Spring Security**: Stateless JWT-based authentication.

### Frontend Tech Stack
- **React (Vite & TypeScript)**: Lightning fast builds.
- **React Router v6**: Client-side routing.
- **Redux Toolkit & React Query**: Robust global state and server-state caching.
- **Tailwind CSS (`ThemeContext`)**: Atomic, themeable styling decoupled through a Context API allowing easy framework swapping. 

---

## ⚙️ Microservices Ecosystem

1. **`api-gateway`** (Port `8080`): The single entry point for all frontend traffic. Routes traffic between different internal services.
2. **`discovery-server`** (Port `8761`): Eureka server maintaining the registry of all active microservices.
3. **`user-service`**: Handles Authentication (`/api/auth`), session JWTs, and User Profiles (Admin, Judge, Participant).
4. **`hackathon-service`**: Manages the creation, timelines, and rules for Hackathon events.
5. **`participation-service`**: Manages team formations, invitations, and the final repository/video submission portal.

---

## 🚀 Getting Started Locally

Getting the entire stack running locally is incredibly simple thanks to Docker Compose. 

### Prerequisites
- [Docker & Docker Compose](https://www.docker.com/) installed.
- Node.js 18+ (If you wish to run the frontend independently).
- Java 17 & Maven (If you wish to develop backend services independently).

### Running the Stack

To build and spin up the complete environment (PostgreSQL, Discovery Server, API Gateway, all Microservices, and the React Frontend):

```bash
# 1. Start the infrastructure backbone (Database + Discovery)
docker-compose up -d postgres discovery-server

# Wait approximately 10-15 seconds for Eureka to fully boot

# 2. Build and start the remaining backend services and the frontend
docker-compose up -d --build
```

The application will now be available:
- **Frontend App**: `http://localhost` (Port 80)
- **API Gateway**: `http://localhost:8080`
- **Eureka Dashboard**: `http://localhost:8761`

### Running AI Workflows
If you are using the integrated AI assistants, you can use the predefined workflows located in `.agents/workflows`:
- `/run-local` - Automatically executes the steps above to run the environment.
- `/create-microservice` - Automatically scaffolds a new Spring Boot microservice using Spring Initializr.

---

## 🧪 API Testing & Documentation

Comprehensive API testing collections are provided via **Postman**:
- Navigate to the `/postman` directory at the root of the repository.
- Import the JSON collections (`user-service.collection.json`, etc.) into your Postman workspace.
- The collections utilize variables for dynamic integration (`{{base_url}}`, and `{{jwt_token}}`).

---

## 📦 Deployment (CI/CD)

This repository strictly enforces **GitHub Flow** standards:
1. **Branch Protection:** Commits to `main` require a Pull Request and successful code reviews.
2. **Action Pipelines:** 
   - `frontend-ci.yml`: Lints and builds the React app on PR.
   - `backend-ci.yml`: Runs Maven checkstyle and tests on PR.
   - `docker-publish.yml`: Automates multi-stage Docker builds and pushes images to the registry on Merge.
3. **Kubernetes:** Baseline manifests for Deployments and Services are available in `k8s/base/`.

---

## 🎨 Frontend Component Rules (Atomic Design)
All React components MUST utilize the `ThemeContext` API instead of hardcoded CSS. This ensures that the entire styling framework (Tailwind) can easily be replaced without touching the business logic. See `.agents/skills/react-atomic-component.md` for guidelines.

```tsx
// ❌ Bad (Hardcoded Tailwind)
<button className="bg-blue-500 text-white rounded px-4">Click Me</button>

// ✅ Good (ThemeContext Architecture)
const { classes } = useTheme();
<button className={classes.button.primary}>Click Me</button>
```

---

<div align="center">
  <i>Providing seamless infrastructure for world-class Hackathons.</i>
</div>
