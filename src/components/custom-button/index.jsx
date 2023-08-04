import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ text, isContained = true, width = "initial" }) => {
  return (
    <>
      {isContained ? (
        <Button variant={"contained"} sx={containedButtonStyle(width)}>
          {text}
        </Button>
      ) : (
        <Button variant={"outlined"} sx={outlinedButtonStyle(width)}>
          {text}
        </Button>
      )}
    </>
  );
};

const containedButtonStyle = (width) => ({
  backgroundColor: "var(--primary-color)",
  width: width,
  color: "white",
  border: "1px solid var(--primary-color)",
  textTransform: "capitalize",
  fontWeight: "700",
  padding: "10px 30px",

  "&:hover": {
    backgroundColor: "white",
    border: "1px solid var(--primary-color)",
    color: "var(--primary-color)",
  },
});

const outlinedButtonStyle = (width) => ({
  width: width,
  color: "var(--primary-color)",
  border: "1px solid var(--primary-color)",
  textTransform: "capitalize",
  fontWeight: "700",
  padding: "10px 30px",
  "&:hover": {
    border: "1px solid var(--primary-color)",
  },
});

export default CustomButton;
