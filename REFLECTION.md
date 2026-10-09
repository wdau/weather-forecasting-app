# Project Reflection — Weather Forecast App

## Overview

For this project, I built a responsive weather application using React and JavaScript, with Vite for the development/build workflow, Material UI for the interface, Recharts for a temperature graph, and OpenWeather for weather and location data. The app displays current conditions, a forecast at three-hour intervals, and a five-day forecast. Users can select a location, switch between Celsius and Fahrenheit, and toggle light and dark themes.

## What I built and learned

One of the main things I learned was how to split an application into focused components and keep shared behavior in a custom hook. The search bar, current-weather panel, loading message, error message, three-hour forecast, and five-day forecast each have separate responsibilities. The `useWeather` hook manages the selected location and coordinates the weather requests, loading state, and error state.

I also learned that **the location selected by a user matters as much as the city name**. Different places can share the same name. Initially, searching by city name could return weather for a different place than the one selected. I changed the flow so that the geocoding suggestion's latitude and longitude are passed to the current-weather and forecast endpoints. The interface also displays the selected suggestion's name and region/country rather than relying on the weather response's nearby locality name.

Working with asynchronous requests helped me understand how input changes trigger suggestion requests, how API data is transformed into UI, and why loading and error states are important. I also learned to account for a location's time zone when displaying its local time and forecast times.

Building the temperature line chart introduced me to visualizing data with Recharts. The chart uses the same forecast data as the small forecast cards, allowing the temperature trend and the corresponding times to be viewed together. Material UI helped with responsive layouts, cards, controls, icons, and light/dark theme styling.

## Challenges and how I addressed them

- **Ambiguous city names:** A city-name request was not enough to guarantee the selected location. I updated weather requests to use latitude and longitude from the selected geocoding result.
- **Geocoding limitations:** OpenWeather does not always return suggestions for every partial spelling and may return repeated or similar locations. I added filtering for exact duplicates and kept the limitation documented rather than trying to build a more advanced geocoder late in the project.
- **Responsive layout:** I tested the layout at phone widths and adjusted the page structure so current conditions and the three-hour forecast can sit side by side on wider screens and stack on smaller screens.
- **Forecast visualization:** I added a temperature line chart above the horizontally scrollable three-hour forecast cards. Keeping the graph and cards on the same data makes the relationship between the line points and forecast times clearer.
- **React and MUI behavior:** I addressed lint feedback and React console warnings, including issues related to React keys and different MUI Grid APIs. This reinforced the importance of checking both the browser console and static-analysis output rather than relying only on whether the interface appears to work.
- **Build validation:** I ran ESLint and the Vite production build. The build completed successfully, although Vite reported that the generated JavaScript chunk was larger than its recommended warning threshold.

## Testing and validation

During development, I manually checked city selection, including locations with identical names in different regions, and verified that the selected coordinates were used for weather requests. I also tested the temperature-unit toggle, theme toggle, current conditions, forecasts, and responsive layout. I ran `npm run lint` and `npm run build`; both completed successfully after the lint issues were corrected. I also checked the application in the browser and reviewed the console for errors and warnings.

Before submission, I should make one final pass through the deployed version as well as the local production preview, because environment variables and hosting configuration can behave differently after deployment.

## What I would improve next

If I had more time, I would consider:

1. Replacing or supplementing the current geocoder with a service designed for true partial-name autocomplete and clearer disambiguation.
2. Debouncing location queries and cancelling outdated requests so that rapid typing does not produce unnecessary network requests or stale suggestions.
3. Moving weather API requests behind a backend/proxy if the API key needs to remain private. A Vite `VITE_` variable is exposed in the client bundle and is not a secret-storage mechanism.
4. Improving the chart bundle size with code-splitting or other build optimization, then measuring whether that improves real loading performance.
5. Adding automated tests for temperature conversion, duplicate suggestion filtering, API error handling, and location selection.
6. Improving accessibility by checking keyboard-only use, focus visibility, image alternative text, and color contrast in both themes.

## Conclusion

This project helped me connect React components, hooks, external APIs, asynchronous data, responsive UI, and data visualization in one application. The most valuable lesson was to track the selected location as structured data, not just a text string. I also learned to validate changes with linting, a production build, and browser testing, and to prioritize functional correctness and clear user feedback over small cosmetic changes.
