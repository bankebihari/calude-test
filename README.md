# Portfolio

A personal developer portfolio built with React + Vite.

## Live Demo

**GitHub Pages:** [https://bankebihari.github.io/Portfolio/](https://bankebihari.github.io/Portfolio/)

**Vercel:** [https://react-blog-bankebihari.vercel.app](https://react-blog-bankebihari.vercel.app) *(Vercel project: react-blog)*

## Features

- Click-to-edit hero name (saved to localStorage)
- Add/remove skill tags (saved to localStorage)
- Resume upload, view, download, and delete
- Experience and Projects sections with add/edit/delete
- Contact form and footer with GitHub link
- Glassmorphism dark theme

## Blog Posts (3 posts included in `/src/data/posts.js`)

| # | Title | Category |
|---|-------|----------|
| 1 | Getting Started with React | React |
| 2 | CSS Tips Every Developer Should Know | CSS |
| 3 | JavaScript ES2024 Features | JavaScript |

## Getting Started

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
```

CI/CD is configured via GitHub Actions (`.github/workflows/deploy.yml`).  
Every push to `main` automatically builds and deploys to **GitHub Pages**.

## Tech Stack

- React 19
- React Router v7
- Vite
- CSS (glassmorphism dark theme)

## Deployments

| Platform | URL | CI/CD |
|----------|-----|-------|
| GitHub Pages | https://bankebihari.github.io/Portfolio/ | Auto on push to `main` via GitHub Actions |
| Vercel | https://react-blog-bankebihari.vercel.app | Manual / Vercel dashboard |
