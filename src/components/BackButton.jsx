import * as React from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const BackButton = function BackButton() {
  return (
    <>
      <Link to={`/`}>
        <Button
          variant="outlined"
          sx={{
            color: "rgb(17, 21, 23)",
            borderColor: "rgb(17, 21, 23)",
            marginTop: "70px",
            "&:hover": {
              borderColor: "rgb(49, 52, 68)",
              color: "rgb(49, 52, 68)",
            },
          }}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Link>
    </>
  );
};

export default BackButton;
