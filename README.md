# 🧩 Kanban Board – Task Management App

![Kanban Board Screenshot](./public/screenshot.png) <!-- Replace with actual path -->

## 📋 Project Overview

**Kanban Board** is a task management web application that allows users to visually organize their tasks using draggable cards across "To Do", "In Progress", and "Done" columns.

This full-stack app includes:

- 🔐 User authentication with JWT
- 🖥️ Frontend built with React, TypeScript, and Vite
- 🧠 Backend using Node.js and Express
- 🗄️ PostgreSQL database with Sequelize ORM

---

## 🚀 Technologies Used

### 🖥️ Frontend
- React
- TypeScript
- Vite
- CSS Modules / TailwindCSS
- LocalStorage (for session persistence)

### 🔙 Backend
- Node.js
- Express
- Sequelize ORM
- PostgreSQL
- JWT (JSON Web Tokens)
- Bcrypt (for password hashing)
- Dotenv (for environment configuration)

---
## ⚙️ Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/kanban-board.git
cd kanban-board

### 2. Set up environment variables
In /server/.env:
env
Copy
Edit
PORT=3001
DB_NAME=kanban_db
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key

### 🔐 Features
User registration and login with JWT

Protected routes and session persistence

Task creation, editing, and deletion

Column-based view (To Do, In Progress, Done)

PostgreSQL database integration

###📸 Preview
<img src="./public/kanban-demo.gif" alt="Kanban Demo" width="600" />

## 👩‍💻 Developed by
Michelle Guzmán – @MichGuzman