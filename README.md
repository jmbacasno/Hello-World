# Hello World (React + Vite)

A beautifully crafted, highly polished, and interactive Hello World web application built with React, Tailwind CSS, and Motion.

## 🚀 Live Demo
You can view the live site on GitHub Pages here:
👉 **[https://jmbacasno.github.io/Hello-World/](https://jmbacasno.github.io/Hello-World/)**

---

## ✨ Features
- **Dynamic Interactive Greeting**: Personalize the "Hello World" heading in real-time as you type your name.
- **Micro-Animations**: Experience fluid, premium state changes and entry transitions powered by `motion`.
- **Modern Minimal Styling**: Designed with a clean aesthetic featuring elegant slate borders, gentle background blurs, and high-quality type sizing.
- **Full Responsiveness**: Looks perfect on devices of all screen sizes—from mobile phones to desktop monitors.

---

## 🛠️ Tech Stack
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: GitHub Actions (GitHub Pages)

---

## 💻 Local Development

### 1. Clone the repository
```bash
git clone https://github.com/jmbacasno/Hello-World.git
cd Hello-World
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📦 Production & Deployment

### Build the application
To compile and bundle the static application assets into the `dist/` directory:
```bash
npm run build
```

### Deploy to GitHub Pages
This project is pre-configured to build and deploy to GitHub Pages using two methods:

#### Method A: Automated Deployment (GitHub Actions)
Simply push your changes to your `main` or `master` branch. The included GitHub Actions workflow inside `.github/workflows/deploy.yml` will automatically build the site and deploy it to your GitHub Pages domain.

#### Method B: Manual Deployment (CLI)
You can deploy directly from your local terminal using the `gh-pages` utility:
```bash
npm run deploy
```
