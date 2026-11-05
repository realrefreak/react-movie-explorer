# React Movie Explorer

A movie search app built with React and Vite. Search for films using the [OMDb API](https://www.omdbapi.com/), view details, and save favourites.

## Features

- Search movies by title
- Movie details page (plot, director, cast, IMDb rating)
- Favourites list saved in the browser (localStorage)
- Client-side routing with React Router

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Get a free API key from [omdbapi.com](https://www.omdbapi.com/apikey.aspx), then copy `.env.example` to `.env` and add your key:
   ```
   VITE_OMDB_API_KEY=your_api_key_here
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – build for production
- `npm run preview` – preview the production build
- `npm run lint` – run Oxlint

## Tech stack

React 19 · React Router 7 · Vite 8 · Oxlint
