# Real-Time Two-Client Chat App

This is a full-stack real-time chat application built using:

- **Next.js** — Frontend (React)
- **Express + Socket.IO** — Backend (WebSocket server)
- **Vercel** — For frontend deployment
- **Render** (or Fly.io) — For backend deployment

---

## Project Structure

```
chat-app/
├── frontend/              # Next.js app
│   ├── pages/
│   ├── package.json
│   └── ...
├── backend/               # Express + Socket.IO server
│   ├── index.js
│   ├── package.json
│   └── ...
├── README.md              # This file
```

---

### Features

- Two-client real-time chat (no page refresh)
- Built-in message broadcasting via WebSockets
- Simple and clean chat UI
- Easy to deploy on free hosting services

---

## How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### 2. Start the Backend (WebSocket server)

```bash
cd backend
npm install
node index.js
```

This starts the backend server at: `http://localhost:4000`

### 3. Start the Frontend (Next.js app)

```bash
cd ../frontend
npm install
npm run dev
```

This starts the app at: `http://localhost:3000`

> Make sure your frontend connects to `http://localhost:4000` in the Socket.IO client code.

---

## Deployment Instructions

### Frontend (Next.js) → Vercel

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repo
3. Set the root directory to `frontend/`
4. Click **Deploy**

### Backend (Socket.IO) → Render

1. Go to [Render](https://render.com)
2. Create a new **Web Service**
3. Connect your GitHub repo
4. Set root directory to `backend/`
5. Set **Start command** to:

```bash
node index.js
```

6. Deploy and copy the live backend URL

### ⚙️ Update Frontend WebSocket URL

In `frontend/pages/index.js`, replace:

```js
const socket = io("http://localhost:4000");
```

with your Render URL, like:

```js
const socket = io("https://your-backend-service.onrender.com");
```

---

## Usage

1. Open the deployed frontend in **two browser tabs**
2. Type a message and click **Send**
3. Messages appear in real-time in both tabs

---

## Tech Stack

| Tech        | Role               |
|-------------|--------------------|
| Next.js     | Frontend framework |
| React       | UI components      |
| Socket.IO   | WebSocket layer    |
| Express.js  | Backend server     |
| Vercel      | Frontend hosting   |
| Render      | Backend hosting    |
