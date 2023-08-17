import { useParams } from "react-router-dom";
import "./pujaPage.scss";
import { useEffect, useRef, useState } from "react";
import { servicesData } from "../../data/all-services-data";
import CustomButton from "../../components/custom-button";
import { Box } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { whatsappData } from "../../utils/whatsapp";

const PujaPage = () => {
  const [pujaData, setPujaData] = useState(null);
  const { id } = useParams();
  const pujaRef = useRef(null);

  useEffect(() => {
    const puja_data = servicesData.find((data) => {
      console.log(data.title === id);
      return data.title === id;
    });
    setPujaData(puja_data);
  }, [id]);

  useEffect(() => {
    if (pujaRef.current) {
      console.log(pujaRef);
      pujaRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // This creates a smooth scrolling effect
      });
    }
  }, []);

  return (
    <>
      {pujaData && (
        <main ref={pujaRef} className="puja-details-card">
          <div className="puja-image">
            <Tilt>
              <Box
                sx={{
                  borderRadius: "10px",
                  width: "300px",
                  height: "300px",
                  backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),url(${pujaData?.src})`,
                  backgroundBlendMode: "multiply",
                  backgroundPostion: "top",

                  "@media(min-width:1000px)": {
                    height: "400px",
                    width: "400px",
                  },
                }}
              ></Box>
            </Tilt>
          </div>

          <div className="puja-text-container">
            <div className="puja-header">
              <h1 className="puja-title">{pujaData?.title}</h1>
              <div className="puja-btn">
                <CustomButton onClick={() => whatsappData()} text="Book Now" />
              </div>
            </div>

            <div className="animation-container">
              <section className="puja-desc">
                {pujaData?.description.map((data, index) => (
                  <p key={data + index}>{data}</p>
                ))}
              </section>

              <section className="puja-benefits-container">
                {pujaData?.benefits?.title && (
                  <h4 className="puja-header">{pujaData?.benefits?.title}</h4>
                )}
                <ul className="puja-benefits">
                  {pujaData?.benefits?.points?.map((data, index) => (
                    <li className="puja-benefits-list" key={data.title + index}>
                      <h5 className="puja-benefits-title">{data.title}</h5>
                      <p className="puja-benefits-desc">{data.description}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default PujaPage;
