# Portfolio Website by Matthew Battagel

Live at: **[matthewbattagel.co.uk](https://matthewbattagel.co.uk)**

## About

A personal portfolio website showcasing my work, interests, and experience as a software engineer. Built with React, TypeScript, and Vite, featuring a config-driven architecture that makes content updates simple and maintainable.

## Features

- **Hero Section** - Dynamic typing animation with rotating tech jokes
- **About Section** - Professional bio with photo carousel
- **Featured Projects** - Curated showcase of key projects
- **GitHub Feed** - Real-time integration displaying public repositories
- **Spotlight Sections** - Flexible content areas for additional highlights
- **Responsive Design** - Mobile-first approach with modern UI

## Tech Stack

- **React** - UI component framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **GitHub Pages** - Static site hosting
- **GitHub API** - Repository data integration

## Configuration

All content is managed through a single `src/config.ts` file, making it easy to update personal information, navigation, project details, and section content without touching component code.

## Development

### Prerequisites

```sh
node >= 18
npm >= 9
```

### Running Locally

```sh
npm install
npm run dev
```

### Deploy to GitHub Pages

```sh
npm run build
npm run deploy
```

The deploy script builds the site and pushes to the `gh-pages` branch.

## Version History

### v3 (Current)
Complete architectural redesign with a config-driven approach. Introduced modular sections, unified configuration, and improved UI components including typed text animations, photo carousels, and GitHub API integration.

### v2
Enhanced version with routing capabilities using React Router. Added dedicated help pages and improved navigation structure. Experimented with additional features like canvas animations and chatbot integration.

### v1
Initial portfolio built with React and TypeScript to learn modern web development. Focused on displaying GitHub repositories using the GitHub API with simple card-based layouts. First experience with domain registration, DNS configuration, and GitHub Pages deployment.

## Why This Project?

I built this portfolio to develop skills in React and TypeScript while creating something genuinely useful. Starting from basic repository cards, it evolved through multiple iterations as I learned more about component architecture, state management, and user experience design.

The config-driven v3 architecture reflects lessons learned about maintainability—separating content from code makes updates effortless and reduces the chance of breaking changes. Each version taught me something new about web development, from TypeScript's type system to React's component patterns.

Hosting on GitHub Pages taught me about deployment pipelines, DNS configuration, and the full lifecycle of releasing a web application. The project continues to be a testbed for new ideas and techniques.
