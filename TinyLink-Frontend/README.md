# TinyLink Frontend

A clean and responsive React-based frontend for generating and managing short URLs with real-time validations, copy-to-clipboard, toast notifications, and a modern UI.

---

## 🚀 Live Demo

🔗 **Live URL:** `https://tiny-link-aniket.vercel.app`

---

---

## 🛠️ Tech Stack

* **React.js** (Vite or CRA)
* **Fetch** for API communication
* **React-Toastify** for notifications
* **CSS Modules / Global CSS** for styling
* **Deployed on Vercel**

---

## ✨ Features

* Simple and attractive UI
* URL validation
* Copy short URL with one click
* Beautiful modal UI
* Toast alerts for success & errors
* Fully responsive design
* Integrated with backend API

---

## 📁 Project Structure

```
src/
│
├── assets/                  # Images, icons, logos
│   ├── logo.png
│   └── copy-icon.svg
│
├── styles/                  # CSS for each component/page
│   ├── App.css
│   ├── Dashboard.css
│   ├── Stats.css
│   ├── AddLinkForm.css
│   ├── LinkTable.css
│   └── Modal.css
│
├── routes/                  # React Router setup
│   └── MyRoutes.jsx
│
├── components/              # Reusable components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── AddLinkForm.jsx
│   ├── LinkTable.jsx
│   ├── Modal.jsx
│   └── CopyButton.jsx
│
├── pages/                   # Main pages
│   ├── Dashboard.jsx
│   ├── Stats.jsx
│   └── NotFound.jsx
│
├── App.jsx                  # Main App container
├── main.jsx                 # ReactDOM render
└── index.css                # Global styles

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Project

```bash
git clone <your-frontend-repo-url>
cd project-folder
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start Development Server

```bash
npm run dev
```

---

## 🚀 Deployment (Vercel)

1. Push your project to GitHub
2. Go to **Vercel → New Project**
3. Import GitHub repo
4. Select **Framework: React**
5. Set **Environment Variable** (if needed) e.g. `VITE_BACKEND_URL`
6. Deploy

---

## 🔗 API Endpoints Used

* `POST /create` – Create short URL
* `GET /{code}` – Redirect to original URL
* `GET /health` – Check server status

---

---

## 🙌 Author

**Aniket Soni**

