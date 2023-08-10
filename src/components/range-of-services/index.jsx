import React from "react";
import "./servicesRange.scss";
import { Box, useMediaQuery } from "@mui/material";
import flowersLine from "../../assets/flowers.jpeg";
import bigFlowerLine from "../../assets/flowers_big.png";
import CardTilt from "../card-tilt/cardTilt";

const RangeOfServices = () => {
  const isMobileScreen = useMediaQuery("(max-width: 800px)");

  return (
    <Box className="range-of-services">
      <div className="flowerdiv">
        {!isMobileScreen ? (
          <img src={bigFlowerLine} alt="A line of Flowers" />
        ) : (
          <img src={flowersLine} alt="A line of Flowers" />
        )}
      </div>

      <div className="services-heading">
        <h2>
          We provide a range of <span>services</span>
        </h2>
      </div>
      <div className="services-list">
        <CardTilt title={"Puja"} />
        <CardTilt title={"E-Puja"} />
        <CardTilt title={"Homa/Havana"} />
        <CardTilt title={"astrology"} />
      </div>
    </Box>
  );
};

export default RangeOfServices;
