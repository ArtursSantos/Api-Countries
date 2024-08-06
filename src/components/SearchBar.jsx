import * as React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";

export const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
    onSearch(search);
  };

  return (
    <TextField
      id="search_bar"
      sx={{ width: "350px" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      label="Search for a country..."
      variant="outlined"
      value={search}
      onInput={handleChange}
    >
      <SearchIcon />
    </TextField>
  );
};
