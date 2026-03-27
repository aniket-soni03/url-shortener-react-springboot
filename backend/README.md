# 🔗 URL Shortener — Backend

## 📌 Description
Backend service for the URL shortener built using Spring Boot providing REST APIs for link generation, redirection, and analytics.

## 🚀 Tech Stack
- Spring Boot
- Spring Data JPA
- MySQL
- REST APIs
- Maven

## ✨ Features
- Generate short URLs with unique or custom codes
- Redirect to original URL using short links
- Track total clicks and last visit details
- Delete links from database
- Exception handling for invalid URLs and duplicate codes
- Health check endpoint for service monitoring

## 🔧 API Overview
- POST /api/links → Create short URL
- GET /api/links → Fetch all links
- GET /api/links/{code} → Get link statistics
- DELETE /api/links/{code} → Delete link
- GET /{code} → Redirect to original URL
- GET /health → Health check

## ⚙️ Configuration

## Update your `application.properties`

spring.datasource.url=jdbc:mysql://localhost:3306/url_shortener
spring.datasource.username=your_username
spring.datasource.password=your_password

## ⚙️ Run Locally

## Backend
```bash
cd backend
mvn spring-boot:run
```