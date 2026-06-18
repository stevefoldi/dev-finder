# Dev Finder

A small React app that searches GitHub for developers and shows expanded profile
details in a modal. Built as a focused demo of component architecture, live API
integration, and component testing — the kind of day-to-day frontend work most
roles ask about.

**Live demo:** _add your deployed link here_

## Why this project

This was built specifically to demonstrate a few things in a small, reviewable
package:

- Modular, reusable React components (`Button`, `SearchBar`, `UserCard`, `UserModal`, `Navbar`)
- Integration with a live third-party REST API (GitHub's public API — no auth required)
- Component-level testing with Vitest + React Testing Library
- Bootstrap for layout/utilities, with a custom design layer on top so it doesn't
  look like default Bootstrap

## Stack

- [React](https://react.dev) + [Vite](https://vitejs.dev) for the app and dev server
- [Bootstrap 5](https://getbootstrap.com) for grid/utility classes
- [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com/react) for tests
- [GitHub REST API](https://docs.github.com/en/rest) (`/search/users`, `/users/:login`) for data

## Getting started

```bash
npm install
npm run dev       # start the local dev server
npm run build      # production build
npm run preview    # preview the production build locally
npm run test       # run the test suite once
npm run test:watch # run tests in watch mode
```

## Project structure

```
src/
  api/github.js          # GitHub API calls (search + user details)
  components/
    Navbar.jsx
    SearchBar.jsx
    Button.jsx
    UserCard.jsx
    UserModal.jsx
    __tests__/           # component tests
  App.jsx                 # ties search, results, and modal together
  index.css               # design tokens + custom styling on top of Bootstrap
```

## What I'd extend next

- Pagination for search results (GitHub's API supports it natively)
- Debounce the search input for a more responsive feel
- Loading skeletons instead of plain text while results load
- A "recently viewed" list using local component state
