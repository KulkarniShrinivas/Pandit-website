import React from "react";
import "./aboutus.scss";
import ownerData from "./ownerData";

const AboutUs = () => {
  return (
    <section className="about-us-container">
      <h2 className="about-us-heading">WHY US?</h2>
      <div className="about-us">
        <div className="owner-container">
          <div className="owner-column">
            <div className="owner-item">
              <h2>{ownerData.yearsOfExperience}</h2>
              <h3>{ownerData.subheading}</h3>
            </div>
            <div className="owner-item">
              <h2>{ownerData.happyClients}</h2>
              <h3>{ownerData.clientsubheading}</h3>
            </div>
          </div>

          <div className="owner-column">
            <div className="owner-item">
              <h2>{ownerData.experiencedTrainers}</h2>
              <h3>{ownerData.trainersubheading}</h3>
            </div>
            <div className="owner-item">
              <h2>{ownerData.monthlyClasses}</h2>
              <h3>{ownerData.monthsubheading}</h3>
            </div>
          </div>
        </div>

        <div className="quote-container">
          <div className="owner-item">
            <h3 className="quote">{ownerData.quote}</h3>
            <p>- {ownerData.quoteAuthor}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
