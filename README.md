# Dahar Engineering Company — Website

A Vite + React + TypeScript website for Dahar Engineering Company. Works on Windows, macOS, and Linux.

## Getting Started

**Requirements:** Node.js 20.19+ (or 22.12+) and npm

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
/
├── src/
│   ├── assets/        # Images and media files
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── videos/        # MP4 video files served statically
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Contact Form

The Contact page opens a pre-filled message in the visitor's default email app. It does not require a backend or environment variables.

## Tech Stack

- **React 19** — UI framework
- **Vite 7** — Build tool and dev server
- **TypeScript** — Type safety
- **Tailwind CSS v4** — Styling
- **Wouter** — Client-side routing
- **React Hook Form + Zod** — Form validation
- **Framer Motion** — Animations
- **Radix UI** — Accessible component primitives
- **Lucide React** — Icons
