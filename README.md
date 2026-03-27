# 🔗 URL Shortener — Full Stack

## 📌 Description
Full-stack URL shortener application using React and Spring Boot that generates unique links with real-time click tracking and search functionality.

## 🚀 Tech Stack  
- React.js
- Spring Boot
- Spring Data JPA
- MySQL
- REST APIs
- CSS

## ✨ Features
- Generate short URLs with optional custom codes
- Redirect to original URL using short links
- Track total clicks and last visit details
- Search and manage stored links
- Delete links from dashboard
- Responsive UI for all devices

## 🏗️ Architecture
- Frontend: React application for user interface and interaction
- Backend: Spring Boot REST APIs for link processing and tracking
- Database: MySQL for storing links and analytics

## 🔧 API / Backend
- REST APIs for link creation, retrieval, and deletion
- URL redirection using unique short codes
- Exception handling for invalid URLs and duplicate codes
- Database integration using Spring Data JPA

## 🌍 Live Demo
Frontend: https://tiny-link-aniket.vercel.app

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
## Frontend
```bash
cd frontend
npm install
npm run dev 
```
