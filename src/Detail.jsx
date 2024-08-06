import * as React from "react";
import { styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NavBar from "./components/NavBar";
import CardPais from "./components/CardPais";
import BackButton from "./components/BackButton";

function App() {
  return (
    <>
      <NavBar />
      <BackButton />
    </>
  );
}

export default App;
