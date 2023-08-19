import React from "react";
import Tilt from "react-parallax-tilt";
import "./cardTilt.scss";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const CardTilt = (props) => {
  return (
    <Tilt>
      <Box
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
    url(${props.img})
      center/cover no-repeat`,
          width: props?.width || "180px",
          height: props?.width || "180px",
        }}
        className="tilt-card"
      >
        <h3 className="card-tilt-heading">
          <Link className="card-tilt-tag" to={props.link}>
            {props.title}
          </Link>
        </h3>
      </Box>
    </Tilt>
  );
};

export default CardTilt;
