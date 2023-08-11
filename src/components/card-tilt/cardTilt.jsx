import React from "react";
import Tilt from "react-parallax-tilt";
import "./cardTilt.scss";
import { Box } from "@mui/material";

const CardTilt = (props) => {
  return (
    <Tilt>
      <Box
        sx={{
          "&::before": {
            content: `""`,
            background: `url(${props.img})`,
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          },
        }}
        className="tilt-card"
      >
        <h3 className="card-tilt-heading">
          <a className="card-tilt-tag" href="#">
            {props.title}
          </a>
        </h3>
      </Box>
    </Tilt>
  );
};

export default CardTilt;
