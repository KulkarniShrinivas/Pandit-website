import React from 'react';
import './aboutus.scss';
import ownerData from './ownerData';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="owner-container">
        <div className="owner-column">
          <div className="owner-item">
            <h2>{ownerData.yearsOfExperience}</h2>
            <h3>{ownerData.subheading}</h3>
            <p>{ownerData.yearsOfExperienceDescription}</p>
          </div>
          <div className="owner-item">
            <h2>{ownerData.happyClients}</h2>
            <h3>{ownerData.clientsubheading}</h3>
            <p>{ownerData.happyClientsDescription}</p>
          </div>
        </div>

        <div className="owner-column">
          <div className="owner-item">
            <h2>{ownerData.experiencedTrainers}</h2>
            <h3>{ownerData.trainersubheading}</h3>
            <p>{ownerData.experiencedTrainersDescription}</p>
          </div>
          <div className="owner-item">
            <h2>{ownerData.monthlyClasses}</h2>
            <h3>{ownerData.monthsubheading}</h3>
            <p>{ownerData.monthlyClassesDescription}</p>
          </div>
        </div>
      </div>

      <div className="quote-container">
        <div className="owner-item">
          <p className="quote">{ownerData.quote}</p>
          <p>- {ownerData.quoteAuthor}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;




