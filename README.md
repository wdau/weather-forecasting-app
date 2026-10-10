# Weather Forecast App

A responsive weather dashboard built with **React**, **Vite**, **Material UI**, **Recharts**, and the **OpenWeather API**. It lets users select a location from geocoding suggestions and view current conditions, a three-hour-step forecast chart, and a five-day forecast.

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

## Available scripts

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

## Deploy to Render

This is a Vite front-end app, so deploy it as a **Render Static Site**.

1. Push the project to a GitHub repository.
2. In the [Render Dashboard](https://dashboard.render.com/), select **New → Static Site** and connect the repository.
3. Set the build command to:

   ```bash
   npm ci && npm run build
   ```

   If the repository does not include `package-lock.json`, use `npm install && npm run build` instead.

4. Set the publish directory to:

   ```text
   dist
   ```

5. In the Render service's **Environment** settings, add:

   | Key | Value |
   | --- | --- |
   | `VITE_WEATHER_API_KEY` | Your OpenWeather API key |

6. Save the environment variable and trigger a new build/deploy. Vite reads `VITE_` variables at build time, so changing the variable requires a rebuild.
7. Open the deployed `onrender.com` URL and test search, both unit options, theme switching, and the forecasts.

For the latest service setup details, see the [Render Static Sites documentation](https://render.com/docs/static-sites).

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
- The current client-side implementation uses a `VITE_` environment variable. Vite embeds client-side environment variables into the built assets, which means the API key can be inspected by users in the browser. Do not treat this variable as a secure secret. For a production app where the key must remain private, route API requests through a backend/proxy and apply any available API-key restrictions.

## Final checks

Before deploying, run:

```bash
npm run lint
npm run build
```

Then test the production build with `npm run preview`. Confirm that city selection uses the intended location, temperature conversion works, both themes render correctly, and the forecast chart/cards and five-day forecast display at desktop and phone widths.