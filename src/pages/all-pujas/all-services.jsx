import "./all-services.scss";
import ServiceCard from "../../components/all-services/service-card/service-card";
import { useEffect, useState } from "react";
import { btnText, servicesData } from "../../data/all-services-data";
import ServicesButton from "../../components/all-services/services-button";
import { useNavigate } from "react-router-dom";

const AllPujaServices = () => {
  const [category, setCategory] = useState(1);
  const [allData, setData] = useState(null);
  const navigate = useNavigate();

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
            key={btn.text}
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
            handleClick={() => navigate("/puja/" + data.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllPujaServices;
