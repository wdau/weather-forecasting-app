import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      return;
    }

    onSearch(city);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        width: "100%",
      }}
    >
      <TextField
        label="Enter a city"
        variant="outlined"
        value={city}
        onChange={handleChange}
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;