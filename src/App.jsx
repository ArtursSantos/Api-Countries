import * as React from "react";
import { styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NavBar from "./components/NavBar";
import CardPais from "./components/CardPais";

function App() {
  return (
    <>
      <NavBar />
      <CardPais />
    </>
  );
}

export default App;
