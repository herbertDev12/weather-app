# Weather App

A modern weather application built with [Next.js](https://nextjs.org) and TypeScript. This app provides up-to-date weather information for any location, displaying both current conditions and daily forecasts. Weather data is fetched from the Open-Meteo API.

## Features

- 🌤️ View current weather conditions (temperature, weather code, wind speed)
- 📅 See daily forecasts including max/min temperatures and weather codes
- 🔍 Search for weather by geographic coordinates (latitude/longitude)
- ⚡ Fast, responsive UI built with React 19 and TailwindCSS
- 🖼️ Modern card-based UI with optimized images and fonts
- 🛡️ Graceful fallback to mock data if the weather API fails

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS 4](https://tailwindcss.com/)
- Radix UI, Lucide React, cmdk, class-variance-authority (UI libraries)
- Open-Meteo API for weather data

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/herbertDev12/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app`: Main application pages and layout
- `src/components`: Reusable UI components (cards, today weather, etc.)
- `src/lib`: Weather API fetching logic and types
- `public/`: Static assets and icons

## Customization

- Modify `src/lib/fetchWeather.ts` to adjust API endpoints or mock data.
- Edit `src/app/page.tsx` to customize the home page.
- Style components using Tailwind classes in the respective files.

## Deployment

The app can be easily deployed to [Vercel](https://vercel.com/) or any platform supporting Next.js.

## License

This project is for learning and demo purposes. Feel free to fork and modify.

---

View the full code and contribute at [herbertDev12/weather-app](https://github.com/herbertDev12/weather-app)
