import * as React from "react";
import NavBar from "./components/NavBar";
import CardPais from "./components/CardPais";
import Grid from "@mui/material/Grid";
import { SearchBar } from "./components/SearchBar";
import FilterBar from "./components/FilterBar";

function App() {
  const [country, setCountry] = React.useState([]);

  

  return (
    <>
      <NavBar />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: "100px", bgcolor: "#FAFAFA" }}
      >
        <SearchBar />
        <FilterBar />
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{ marginTop: "30px", bgcolor: "#FAFAFA" }}
      >
        <CardPais />
      </Grid>
    </>
  );
}

export default App;
