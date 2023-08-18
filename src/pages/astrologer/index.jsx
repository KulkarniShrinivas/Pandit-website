import React, { useEffect } from "react";
import "./astrology.scss";
import { astroData } from "../../data/astro-data";
import CustomButton from "../../components/custom-button";
import { whatsappData } from "../../utils/whatsapp";

const Astrologer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="astrology-container">
      <h1 className="heading">
        Astro<span>logy</span>
      </h1>
      <CustomButton text={"Book Now"} onClick={() => whatsappData()} />
      <div>
        {astroData.heading.map((data) => (
          <h2>{data}</h2>
        ))}
      </div>

      <section className="about-us astro-about">
        <div className="owner-item item-1">
          <h3>{astroData.astroAbout[0].title}</h3>
          <h4>{astroData.astroAbout[0].para}</h4>
        </div>
        <div className="owner-item item-2">
          <h3>{astroData.astroAbout[1].title}</h3>
          <h4>{astroData.astroAbout[1].para}</h4>
        </div>
      </section>
      <section className="astrology-para">
        <p>{astroData.para}</p>
      </section>
    </div>
  );
};

export default Astrologer;
