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
  backgroundColor: "#F7CAC9",
  width: width,
  color: "#241311",
  border: "1px solid #F7CAC9",
  textTransform: "capitalize",
  fontWeight: "700",
  padding: "10px 30px",

  "&:hover": {
    backgroundColor: "white",
    border: "1px solid #F7CAC9",
  },
});

const outlinedButtonStyle = (width) => ({
  width: width,
  color: "#241311",
  border: "2px solid #F7CAC9",
  textTransform: "capitalize",
  fontWeight: "700",
  padding: "10px 30px",
  "&:hover": {
    border: "2px solid #857D7A",
  },
});

export default CustomButton;
