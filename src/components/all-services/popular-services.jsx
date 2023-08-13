import "./popular-services.scss";
import ServiceCard from "./service-card/service-card";
import { btnText, servicesData } from "../../data/all-services-data";
import ServicesButton from "./services-button";
import { useEffect, useState } from "react";

const allPujaServices = () => {
  const [category, setCategory] = useState(1);
  const [allData, setData] = useState(null);

  useEffect(() => {
    setData(servicesData.filter((service) => service.category === category));
  }, [category]);

  return (
    <div className="all-puja-services">
      <div className="all-puja-services-headers">
        <h1 className="heading">Puja Services</h1>
        <p className="para">
          Explore the complete range of puja services we provide
        </p>
      </div>

      <div className="btn-container">
        {btnText.map((btn) => (
          <ServicesButton
            text={btn.text}
            handleClick={() => setCategory(btn.category)}
          />
        ))}
      </div>

      <div className="all-services">
        {allData?.map((data, index) => (
          <ServiceCard
            key={data.title + index}
            text={data.title}
            src={data.src}
          />
        ))}
      </div>
    </div>
  );
};

export default allPujaServices;
