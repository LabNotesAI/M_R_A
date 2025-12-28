# MongoDocs React App

**A React + FastAPI web application demonstrating MongoDB integration, built with AI-assisted development.**

## Overview

This project is a web app that displays documents stored in a MongoDB database. It was built as a personal exploration of AI-assisted development tools and as a demonstration of full-stack skills.

**Tech stack:**
- Frontend: React (Create React App)
- Backend: FastAPI (Python)
- Database: MongoDB (remote, authenticated)
- Infrastructure: Docker + docker-compose
- Development tools: VS Code + local AI agent for coding assistance

## Motivation

I built this app to:
- Practice full-stack development with React, FastAPI, and Docker
- Showcase AI-assisted coding in a real project
- Provide a working demo for potential employers or collaborators

The app demonstrates how to:
- Fetch and display MongoDB documents in React
- Serialize MongoDB ObjectIds for JSON
- Use Docker for frontend and backend
- Integrate React Router for page navigation

## Features

- List documents with clickable links to detail pages
- Document detail pages showing:
  - Title
  - Content
  - Tags
  - Updated timestamp
  - External link (if provided)
- Fully containerized for easy setup
- AI-assisted development helped structure code and troubleshoot challenges

## Setup

1. Clone the repository:  
```bash
git clone <repo-url>
cd <repo-directory>
```

2. Copy .env.example to .env and fill in your MongoDB connection and API base URL.

3. Build and run containers:
```bash
docker-compose build
docker-compose up -d
```

4. Open your browser at http://localhost:3000

Notes
Some debug code may remain; remove or adjust before development use.
Make sure to replace environment variables with your own credentials.

Lessons Learned / Highlights
AI-assisted coding can accelerate development, but human oversight is essential.
Proper route matching and environment variable handling in CRA + Docker are common pitfalls.
Full-stack debugging requires understanding both frontend and backend behavior.
This project demonstrates the combination of AI tools and human problem-solving to create functional applications efficiently.
