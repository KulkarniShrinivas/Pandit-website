import "./all-services.scss";
import ServiceCard from "../../components/all-services/service-card/service-card";
import { useEffect, useState } from "react";
import { btnText, servicesData } from "../../data/all-services-data";
import ServicesButton from "../../components/all-services/services-button";
import { useNavigate, useParams } from "react-router-dom";

const AllPujaServices = () => {
  const [allData, setData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    setData(
      servicesData.filter((service) => service.category === parseInt(id))
    );
  }, [id]);

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
            category={btn.category}
            text={btn.text}
            key={btn.text}
            handleClick={() => navigate("/allpujas/" + btn.category)}
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
