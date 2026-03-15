---
description: Scaffold and configure a new Spring Boot Microservice
---

This workflow uses Spring Initializr to scaffold a new microservice.
Please configure the `service-name` before running.

// turbo-all
1. Go to the backend directory: `cd /Users/ramkich/projects/Hackathon/backend`
2. Scaffold the new service (Replace `{SERVICE_NAME}` with the intended name beforehand): 
   `curl "https://start.spring.io/starter.tgz?dependencies=web,data-jpa,postgresql,lombok,actuator&type=maven-project&javaVersion=17&bootVersion=3.2.0&groupId=com.hackathon&artifactId={SERVICE_NAME}&name={SERVICE_NAME}&description=New%20Microservice&packageName=com.hackathon.{SERVICE_NAME}" | tar -xzvf - -C {SERVICE_NAME}`
3. Copy the standard multi-stage Dockerfile into its root:
   `cp Dockerfile.template {SERVICE_NAME}/Dockerfile`
4. The service is now generated. The developer needs to manually register it in `docker-compose.yml` under `services`.
