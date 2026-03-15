---
name: Spring Boot Microservice Architecture
description: Guidelines on how to structure code within a Spring Boot Microservice using Domain-Driven Design (DDD).
---

# Spring Boot DDD Structure

When working inside any of the backend microservices (e.g., `user-service`, `hackathon-service`), follow this Domain-Driven layer structure:

1. **Controller Layer**: 
   - Placed in `com.hackathon.[service].controller`.
   - Contains REST endpoint definitions. 
   - Does NOT contain business logic. Delegates entirely to the Service layer.
   - Follows RESTful naming conventions.

2. **Service Layer**: 
   - Placed in `com.hackathon.[service].service`.
   - Contains all the core business logic.
   - Interfaces should be used (e.g., `UserService` interface and `UserServiceImpl` class).

3. **Repository Layer**:
   - Placed in `com.hackathon.[service].repository`.
   - Extends Spring Data `JpaRepository`.

4. **Model/Entity Layer**:
   - Placed in `com.hackathon.[service].model`.
   - Use standard JPA annotations (`@Entity`, `@Table`, `@Id`).
   - Use Lombok annotations (`@Data`, `@NoArgsConstructor`, `@AllArgsConstructor`, `@Builder`) to reduce boilerplate.

5. **DTOs**:
   - Placed in `com.hackathon.[service].dto`.
   - Controllers handle mapping between incoming/outgoing DTO requests and Entities.
