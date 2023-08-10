import React from "react";
import Tilt from "react-parallax-tilt";
import "./cardTilt.scss";

const CardTilt = (props) => {
  return (
    <Tilt>
      <div className="tilt-card">
        <h1>{props.title}</h1>
      </div>
    </Tilt>
  );
};

export default CardTilt;
