# Positivus - Digital Marketing Agency Landing Page

A modern, responsive React-based landing page built with Vite for the Positivus digital marketing agency.

## 🚀 Tech Stack

- **React 19** — UI library
- **Vite 8** — Build tool & dev server
- **Vanilla CSS** — Styling with CSS custom properties
- **Space Grotesk** — Google Fonts typography

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#B9FF66` (Lime Green) |
| Dark | `#191A23` |
| Light BG | `#F3F3F3` |
| White | `#FFFFFF` |
| Cards | `#292A32` |
| Font | Space Grotesk |

## 📦 Project Structure

```
src/
├── components/
│   ├── Header/          # Sticky navigation with mobile hamburger
│   ├── Hero/            # Hero section with CTA & logo strip
│   ├── SectionTitle/    # Reusable section header component
│   ├── Services/        # Services grid with alternating cards
│   ├── CTA/             # Call-to-action banner
│   ├── WorkingProcess/  # Accordion process steps
│   ├── Team/            # Team members grid
│   ├── Testimonials/    # Testimonials carousel
│   ├── ContactForm/     # Contact form with radio selection
│   └── Footer/          # Dark footer with newsletter
├── App.jsx
├── App.css
├── index.css            # Global design system
└── main.jsx
```

## 🏃 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✨ Features

- **Fully Responsive** — Mobile, tablet, and desktop breakpoints
- **Accessible** — ARIA labels, keyboard navigation, focus states
- **Smooth Animations** — Hover effects, scroll animations, carousel transitions
- **Component-based** — Modular, reusable React components
- **BEM CSS** — Clean, maintainable class naming convention
- **SEO Ready** — Proper meta tags, semantic HTML

## 🌐 Deployment

This project is ready for Vercel deployment:

1. Push this repo to GitHub
2. Connect the repo in [Vercel](https://vercel.com)
3. Vercel auto-detects Vite — no config needed
4. Deploy!

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|-----------|--------|
| `> 1024px` | Desktop |
| `768px - 1024px` | Tablet |
| `< 768px` | Mobile |
