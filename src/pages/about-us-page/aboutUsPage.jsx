import React from "react";
import AboutUsMain from "../../components/about-us-page/about-us-main/aboutUsMain";
import "./aboutUsPage.scss";
import AboutUsContent from "../../components/about-us-page/about-us-content/aboutUsContent";

const AboutUsPage = () => {
  return (
    <div className="about-us-page-container">
      <AboutUsMain />
      <AboutUsContent />
    </div>
  );
};

export default AboutUsPage;
