import * as React from "react";
import NavBar from "./components/NavBar";
import CardPais from "./components/CardPais";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <>
        <NavBar />
      <Grid container justifyContent="center" sx={{marginTop:"70px", bgcolor:"#FAFAFA"}}>
        <CardPais />
      </Grid>
      
    </>
  );
}

export default App;
