# Léo Martin - Portfolio

A modern, minimalist portfolio website showcasing professional experience, projects, and speaking engagements.

## Overview

This is a personal portfolio website built with React, TypeScript, and Tailwind CSS. The design features a warm, professional aesthetic with a cream background, charcoal text, and terracotta accents.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/LeoMartin-30/github.git
   cd léo-martin---portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
.
├── components/           # React components
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── SpeakingSection.tsx
│   ├── WritingSection.tsx
│   └── Sidebar.tsx
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
├── index.html           # HTML template
├── types.ts             # TypeScript type definitions
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies

```

## Features

- Responsive design (mobile-first approach)
- Smooth animations and hover effects
- Custom color palette (cream, charcoal, terracotta)
- Typography using Inter and Playfair Display fonts
- Custom scrollbar styling
- Modular component architecture

## Customization

The website uses a custom Tailwind configuration with extended colors:
- `cream`: #F4F1EA (background)
- `charcoal`: #282828 (primary text)
- `terracotta`: #C17F59 (accent color)

Fonts:
- Sans-serif: Inter
- Serif: Playfair Display

## License

© 2025 Léo Martin. All rights reserved.
