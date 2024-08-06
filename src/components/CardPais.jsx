import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

const CardCountry = function ActionAreaCard() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);
  const ListCountry = country.map((countries) => (
    <Grid item>
      <Card sx={{ width:415, height:415, maxWidth: 345, my: "40px", margin:"35px" }}>
        <CardActionArea key={countries.cca2}>
          <CardMedia component="img" height="200" width="200" image={countries.flags.png} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"bold"}}>
              <></> {countries.name.common}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <>Population: </> {countries.population}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <>Region: </>
              {countries.region}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <>Capital: </>
              {countries.capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  ));

  return [ListCountry]
};

export default CardCountry;
