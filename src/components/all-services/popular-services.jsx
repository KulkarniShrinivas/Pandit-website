import React from "react";
import ServiceCard from "../service-card/service-card";
import { servicesData } from "./popular-services-data";
import "./popular-services.scss";
import CustomButton from "../custom-button";

const PopularServices = () => {
  return (
    <div className="popular-services">
      <h2>Pujas For You</h2>
      <div className="all-services">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            text={service.text}
            src={service.src}
          />
        ))}
      </div>
      <div className="view-more">
        <CustomButton text="View More" width="150px" />
      </div>
    </div>
  );
};

export default PopularServices;
