# Fitness-Den Backend 🏋️‍♂️💻

This repository contains the **backend** of the **Fitness-Den MERN application**. It powers all the core functionality — from authentication to fitness plans, e-commerce, and user management — following the **MVC architecture** with a secure and scalable Node.js + MongoDB setup.

## 🚀 Features

* **MVC Architecture** – Clean and modular code organization.
* **MongoDB Database** – Flexible NoSQL database for storing user data, plans, products, and more.
* **Advanced Authentication & Authorization**

  * Password hashing with **bcrypt**
  * **HTTP cookies** for secure session management
  * Role-based access (User, Trainer, Admin)
* **Email Services** – For account verification, password reset, and notifications.
* **Middleware Layer** – Handles validation, error handling, and request control.
* **Utility Functions** – Reusable helpers for API workflows.
* **RESTful API** – Well-structured endpoints to interact with the frontend.

## 🛠️ Tech Stack

* **Node.js** – Runtime environment
* **Express.js** – Web framework
* **MongoDB (Mongoose)** – Database and ODM
* **Bcrypt.js** – Password hashing
* **JSON Web Tokens / Cookies** – Authentication
* **Nodemailer (if used)** – Email services
* **CORS** – Cross-origin support

## 📂 Project Structure

```
├── controller/   # Request handlers (business logic)
├── database/     # MongoDB connection & config
├── email/        # Email templates & services
├── middleware/   # Custom middleware (auth, error handling, etc.)
├── model/        # Mongoose models (User, Plans, Products, etc.)
├── router/       # API route definitions
├── utility/      # Helper functions
├── server.js     # App entry point
├── package.json  # Dependencies & scripts
├── .env          # Environment variables (not committed)
└── procfile      # Deployment config (Heroku / others)
```

## ⚙️ Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/mateen470/FITNESS-DEN-BACKEND
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the required environment variables:

   ```
  PORT=5000
  DATABASE=mongodb+srv://username:password@cluster0.mongodb.net/?retryWrites=true&w=majority
  CLIENT_SIDE_URL=https://fitness-den.netlify.app

  SECRET_KEY=sk_test_dummy_secret_key

  ACTIVATION_TOKEN_SECRET_KEY=activation_dummy_secret
  ACCESS_TOKEN_SECRET_KEY=access_dummy_secret
  REFRESH_TOKEN_SECRET_KEY=refresh_dummy_secret

  EMAIL_FROM=your-email@example.com
  EMAIL_PASSWORD=your-email-password

   ```

4. Start the server in development:

   ```bash
   npm run dev
   ```

   *(or)*

   ```bash
   node server.js
   ```

5. The backend will run on:

   ```
   http://localhost:5000
   ```

## 🔗 Frontend Repository

The frontend for this project can be found here:
👉 https://github.com/mateen470/FITNESS-DEN

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.
Fork the repo and submit a pull request to suggest improvements.
