# MarkStudy - An Organized Course Platform

MarkStudy is an open-source learning platform that fetches Markdown files from GitHub and organizes them into structured courses for students. Built using the **MERN (MySQL, Express, React, Node.js) stack**, MarkStudy provides a seamless and user-friendly learning experience.

---

# 📂 Frontend Repository: `markstudy-frontend`

## 🚀 Features
- **Fetch & Render Markdown**: Load course content directly from GitHub repositories.
- **User Authentication**: Secure login/signup with JWT authentication.
- **Search & Filter**: Easily find and navigate through courses.
- **Dark Mode Support**: User-friendly UI with light and dark themes.

## 📂 Folder Structure
```
📂 markstudy-frontend
 ┣ 📂 public               # Static assets (favicon, logo)
 ┣ 📂 src
 ┃ ┣ 📂 assets            # Images, icons, fonts
 ┃ ┣ 📂 components        # Reusable UI components
 ┃ ┣ 📂 hooks             # Custom React hooks
 ┃ ┣ 📂 layouts           # Layout components (Navbar, Footer, Sidebar)
 ┃ ┣ 📂 pages             # Individual pages (Home, Course, Dashboard)
 ┃ ┣ 📂 routes            # Route configuration
 ┃ ┣ 📂 services          # API calls (Axios functions)
 ┃ ┣ 📂 store             # Redux store (state management)
 ┃ ┣ 📂 styles            # Global styles (Tailwind)
 ┃ ┣ 📂 utils             # Utility functions (helper functions)
 ┃ ┣ 📄 App.jsx           # Root component
 ┃ ┗ 📄 main.jsx          # Main entry point
 ┣ 📄 .env                # Environment variables
 ┣ 📄 package.json        # Dependencies and scripts
 ┣ 📄 tailwind.config.js  # Tailwind CSS config
 ┗ 📄 vite.config.js      # Vite configuration
```

## 🔧 Installation & Setup
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/markstudy-frontend.git
cd markstudy-frontend
npm install   # Install dependencies
npm run dev   # Start the frontend (Vite)
```

## ✅ Running Tests
```sh
npm test   # Runs Jest tests
npx cypress open   # Open Cypress Test Runner
npx playwright test   # Run Playwright tests
```

## 🚀 Deployment
```sh
npm run build   # Builds the React app for production
```
Deploy the `dist/` folder to **Vercel**, **Netlify**, or any static hosting service.

---

## 🤝 Contributing
We welcome contributions! Follow these steps:
1. **Fork the repository**
2. **Create a new branch** (`feature-new-component`)
3. **Commit your changes**
4. **Push to GitHub & create a Pull Request**

---

## 📩 Contact & Support
- 📧 **Email**: support@markstudy.com
- 🐦 **Twitter**: [@markstudy_app](https://twitter.com/markstudy_app)
- 🌐 **Website**: [markstudy.com](https://markstudy.com)

MarkStudy is an open-source initiative aimed at making structured learning more accessible. 🚀 Happy Learning! 📚

