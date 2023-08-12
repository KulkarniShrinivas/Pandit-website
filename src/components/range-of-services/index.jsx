import React from "react";
import "./servicesRange.scss";
import { Box, useMediaQuery } from "@mui/material";
import flowersLine from "../../assets/flowers.jpeg";
import bigFlowerLine from "../../assets/flowers_big.webp";
import CardTilt from "../card-tilt/cardTilt";
import { rangeData } from "./rangeServicesData";

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
        <p>Seamless and Reverent Puja Services Delivered to Your Doorstep</p>
      </div>
      <div className="services-list">
        {rangeData.map((r, index) => (
          <CardTilt key={r.title + index} img={r.img} title={r.title} />
        ))}
      </div>
    </Box>
  );
};

export default RangeOfServices;
