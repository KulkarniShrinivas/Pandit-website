import React from "react";
import "./astrology.scss";

const Astrologer = () => {
  return (
    <div className="astrology-container">
      <h1 className="heading">Astrology</h1>
      <div>
        <p>Consult Our Expert Vedic Astrologer</p>
        <p>
          Experience Top-notch Vedic Astrology Excellence. Get in Touch with
          Panditji/Guruji
        </p>
      </div>
      <section className="about-us astro-about">
        <div className="owner-item item-1">
          <h3>5k+</h3>
          <h4>Satisfied with Astrology</h4>
        </div>
        <div className="owner-item item-2">
          <h3>5K+</h3>
          <h4>Horoscope reading</h4>
        </div>
      </section>
    </div>
  );
};

export default Astrologer;
