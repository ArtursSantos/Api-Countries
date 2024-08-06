import * as React from "react";
import NavBar from "./components/NavBar";
import BackButton from "./components/BackButton";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, Typography, CardMedia } from "@mui/material";

function App() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);

  const countrySelect = country.map((country) => {
    return (
      <>
        <Grid container sx={{marginTop:"100px"}}>
          <Grid item xs={12} md={6} sx={{ marginLeft:"50px" }}>
            <CardMedia
              component="img"
              height="200"
              width="200"
              image={country.flags.svg}
              sx={{
                width: 615,
                height: 415,
                maxWidth: 545,
                margin: "30px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={1}>
            <Typography variant="body1" gutterBottom>
              {country.name.common}
            </Typography>
          </Grid>
          <Grid item xs={12} md={1}>
            <Typography variant="body1" gutterBottom>
              {country.population}
            </Typography>
          </Grid>
          <Grid item xs={12} md={1}>
            <Typography variant="body1" gutterBottom>
              {country.region.common}
            </Typography>
          </Grid>
          <Grid item xs={12} md={1}>
            <Typography variant="body1" gutterBottom>
              {country.subregion}
            </Typography>
          </Grid>
          <Grid item xs={12} md={1}>
            <Typography variant="body1" gutterBottom>
              {country.capital}
            </Typography>
          </Grid>
          <Grid item xs={12} md={1}>
            <Typography variant="body1" gutterBottom>
              {country.name.common}
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  });

  return (
    <>
      <Grid container>
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item sx={{margintTop: "100px" }}>
          <BackButton />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        {countrySelect}
      </Grid>
    </>
  );
}

export default App;
