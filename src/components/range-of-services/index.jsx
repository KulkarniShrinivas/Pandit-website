import React from "react";
import "./servicesRange.scss";
import { Box } from "@mui/material";
import left from "../../assets/pLeft.jpeg";
import right from "../../assets/pRight.jpeg";

const RangeOfServices = () => {
  return (
    <Box className="range-of-services">
      <img src={left} className="pattern-left" />
      <img src={right} className="pattern-right" />
      <div className="services-heading">
        <h2>
          We provide a range of <span>services</span>
        </h2>
      </div>
    </Box>
  );
};

export default RangeOfServices;
