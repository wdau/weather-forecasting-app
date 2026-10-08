import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { getCitySuggestions } from "../api/weather";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (city.trim().length < 2) {
      return;
    }

    const fetchSuggestions = async () => {
      const data = await getCitySuggestions(city);

      const uniqueSuggestions = data.filter(
        (item, index, array) =>
          index ===
          array.findIndex(
            (other) =>
              other.name === item.name &&
              other.state === item.state &&
              other.country === item.country
          )
      );

      setSuggestions(uniqueSuggestions);
    };

    fetchSuggestions();
  }, [city]);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Autocomplete
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            <img
              src={`https://flagcdn.com/24x18/${option.country.toLowerCase()}.png`}
              alt={option.country}
              width="24"
              height="18"
              style={{ marginRight: "8px" }}
            />

            <Typography>
              {option.name}
              {option.state ? `, ${option.state}` : ""}
              {`, ${option.country}`}
            </Typography>
          </Box>
        )}
        options={suggestions}
        getOptionLabel={(option) =>
          typeof option === "string"
            ? option
            : `${option.name}${option.state ? `, ${option.state}` : ""
            }, ${option.country}`
        }
        onInputChange={(event, newValue) => {
          setCity(newValue);

          if (newValue.trim().length < 2) {
            setSuggestions([]);
          }
        }}
        onChange={(event, newValue) => {
          if (newValue && typeof newValue !== "string") {
            setCity(newValue.name);
            onSearch(newValue);
          }
        }}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search City"
            variant="outlined"
            slotProps={{
              ...params.slotProps,
              input: {
                ...params.slotProps.input,
                startAdornment: (
                  <>
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>

                    {params.slotProps.input.startAdornment}
                  </>
                ),
              },
            }}
          />
        )}
      />
    </Box>
  );
};

export default SearchBar;