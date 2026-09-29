import { useState } from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [city, setCity] = useState("");

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Weather Forecast
      </Typography>

      <SearchBar onSearch={handleSearch} />

      {city && (
        <Typography variant="h5" sx={{ mt: 4 }}>
          Searching for: {city}
        </Typography>
      )}
    </Box>
  );
};

export default App;