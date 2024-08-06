import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const BackButton = function BackButton() {
  const [country, setCountry] = useState([]);
  const [name] = useParams();

  console.log(name);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <>
      <Button
        variant="outlined"
        sx={{
          color: "rgb(17, 21, 23)",
          borderColor: "rgb(17, 21, 23)",
          "&:hover": {
            borderColor: "rgb(49, 52, 68)",
            color: "rgb(49, 52, 68)",
          },
        }}
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>

      <Grid item>
        <Card sx={{ maxWidth: 345, my: "40px" }}>
          <CardActionArea key={country.cca2}>
            <CardMedia component="img" height="200" image={country.flags} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <>Nome:</> {country.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <>População: </> {country.population}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <>Região: </>
                {country.region}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <>Capital: </>
                {country.capital}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default BackButton;
