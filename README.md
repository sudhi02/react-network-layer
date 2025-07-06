# 🌐 React Network Layer (Axios + Environment-Based Setup)

A clean and scalable **network layer** built with React and Axios that supports multiple environments (`development`, `production`) using `.env` files. This project demonstrates API consumption, error handling, environment switching — ideal for enterprise apps.

---

## 🚀 Features

- 🔧 Axios instance with interceptors
- 📦 Environment-based config (`.env.*`)
- 📂 Centralized API endpoints
- ✅ Token-based header injection
- ⚠️ Global error handler
- 🌐 Internet connectivity detection (with popup alerts)
- 🔄 Loading UI + logger (optional)


## 📁 Folder Structure

react-network-layer/
│
├── public/
│ └── index.html
│
├── src/
│ ├── api/
│ │ └── apiClient.js # Axios instance with headers/interceptors
│ │
│ ├── config/
│ │ └── env.js # Reads environment variables
│ │
│ ├── services/
│ │ ├── accountService.js # API call functions
│ │ └── accountEndpoints.js # Endpoint paths
│ │

│ ├── utils/
│ │ ├── errorHandler.js # Central error handler
│ │ ├── networkStatus.js # 🔌 Internet connectivity checker
│ │ ├── ErrorBoundary.js # Global error boundaries (optional)
│ │ └── loader.js # Optional: Loader component
│ │ └── logger.js # Optional: logs app error component
│ │
│ ├── App.js # Example UI to test API
│ ├── index.js # Entry point
│ └── App.css / index.css
│
├── .env.development # Local API env
├── .env.production # Production env
├── package.json
└── README.md


---

## 📦 Install & Setup

```bash
git clone https://github.com/yourusername/react-network-layer.git
cd react-network-layer
npm install


npm run start:dev     # Runs with .env.development
npm run start:uat     # Runs with .env.uat
npm run start:prod    # Runs with .env.production

npm run build:dev     # Builds with .env.development
npm run build:uat     # Builds with .env.uat
npm run build:prod    # Builds with .env.production

Sample API Test

🔗 https://jsonplaceholder.typicode.com/users

Sample Output
GET /users
➡️ List of 10 users displayed in UI

----

🌐 Connectivity Monitoring
This project includes a built-in internet connectivity checker:

🛑 Blocks API calls if user is offline

🔔 Shows popup message: No internet connection. Please check your network.

✅ Optionally alerts when connection is restored

This check is globally applied using navigator.onLine and browser online/offline events.


---

## ✅ What to Do Next

1. Save this `README.md` in the root of your project.
2. Add `.env.example` to help others get started.
3. Push to GitHub.
4. (Optional) Add a badge or live demo if deployed.

## 👨‍💻 Author

**Sudhi**  
💬 Available for collaboration, questions, and improvements!