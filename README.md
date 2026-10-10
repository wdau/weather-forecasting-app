# Weather Forecast App

A responsive weather dashboard built with **React**, **Vite**, **Material UI**, **Recharts**, and the **OpenWeather API**. It lets users select a location from geocoding suggestions and view current conditions, a three-hour-step forecast chart, and a five-day forecast.

## Live Demo

[Open the Weather Forecast App](https://weather-forecasting-app-kp0a.onrender.com/)

## Features

- **Location search:** Type a city name and choose a matching suggestion. Suggestions include a country flag and, when available, a state or region.
- **Coordinate-based weather requests:** After a location is selected, current weather and forecast requests use that result's latitude and longitude. This helps avoid accidentally fetching weather for a different place with the same city name.
- **Current conditions:** Shows the selected location, its local time, temperature, weather icon and description, high/low temperatures, feels-like temperature, humidity, and wind speed.
- **Three-hour-step forecast:** Displays forecast cards and a temperature line chart based on the same forecast data. The chart scrolls horizontally with the forecast cards.
- **Five-day forecast:** Summarizes upcoming conditions by day.
- **Celsius and Fahrenheit:** Switch temperature units in the interface.
- **Theme support:** Automatically follows the system's light or dark preference on first visit and remembers the user's selected theme across sessions.
- **Responsive layout:** The current-weather panel and three-hour forecast sit side by side on wider screens and stack on smaller screens.
- **Loading and error feedback:** Provides feedback while weather data is loading and when a request fails.
- **Subtle animations:** Weather result panels fade in when a new location is selected.

## Built with

- React and JavaScript
- Vite
- Material UI (MUI)
- Recharts
- OpenWeather Current Weather API
- OpenWeather 5 Day / 3 Hour Forecast API
- OpenWeather Geocoding API

## Run locally

### Requirements

- Node.js and npm
- An OpenWeather API key with access to the endpoints used by the app

### 1. Install dependencies

```bash
npm install
```

### 2. Configure the API key

Create a `.env` file in the project root and add:

```env
VITE_WEATHER_API_KEY=your_openweather_api_key
```

Replace the placeholder with your own OpenWeather API key. Restart the development server after changing the environment file.

**Do not commit your real `.env` file or API key.** Make sure `.env` is listed in `.gitignore`.

### 3. Start the development server

```bash
npm run dev
```

Vite prints a local URL in the terminal (typically `http://localhost:5173`). Open it in a browser.

## Deploy to Render

This is a Vite front-end app, so deploy it as a **Render Static Site**.

1. Go to [https://dashboard.render.com](https://dashboard.render.com) and click **"New" → "Static Site"**.
2. Connect your GitHub account and select the repository containing your Vite project.
3. Configure your static site with the following settings:

   - **Name**: (Your app name)
   - **Branch**: `main` (or whatever your default branch is)
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

4. Click **"Create Static Site"**. Render will start building and deploying your app.


## Project structure

```text
src/
├── api/
│   └── weather.js              # OpenWeather weather, forecast, and geocoding requests
├── components/
│   ├── CurrentWeather.jsx      # Current conditions and location-local time
│   ├── ErrorMessage.jsx        # Error display
│   ├── FiveDayForecast.jsx     # Daily forecast summary
│   ├── Loading.jsx             # Loading feedback
│   ├── SearchBar.jsx           # Location autocomplete and selection
│   ├── ThreeHourForecast.jsx   # Forecast cards and temperature line chart
│   └── WelcomePanel.jsx        # Welcome screen and weather app feature highlights
├── hooks/
│   └── useWeather.js           # Weather state, requests, loading, and error handling
├── utils/
│   └── temperature.js          # Celsius/Fahrenheit conversion
├── App.jsx                     # Application layout and controls
└── theme.js                    # Light and dark MUI themes
```

## Search behavior and known limitations

- A location must be selected from the suggestions before its coordinates are used to fetch weather. The app intentionally uses the selected suggestion's `lat` and `lon` rather than relying on a city-name lookup for weather data.
- OpenWeather's geocoding suggestions are not a full prefix-autocomplete service. Some partial names may return no suggestions, and the API can return duplicate or very similar results. The app removes exact duplicates based on city name, region/state, and country, but similar results can remain.
- Country flags are loaded from FlagCDN, so displaying them requires an internet connection to that image host.
- The current client-side implementation uses a `VITE_` environment variable. Vite embeds client-side environment variables into the built assets, which means the API key can be inspected by users in the browser.