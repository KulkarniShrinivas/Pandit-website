import React, { useEffect, useRef } from "react";

import "./service-card.scss";
import CustomButton from "../custom-button";

const ServiceCard = ({ title, text, src }) => {
  return (
    <div className="service-card">
      <img src={src} alt="Ganesh Image" />
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="btn-show">
        <CustomButton text="Book Now" isContained={false} />
      </div>
    </div>
  );
};

export default ServiceCard;
