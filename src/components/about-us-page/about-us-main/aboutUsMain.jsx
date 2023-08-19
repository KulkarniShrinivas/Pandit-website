import { aboutUsPageData } from "../../../data/about-us-page-data";
import "./aboutUsMain.scss";
import { ParticlesBackground } from "./particlesConfig/particlesConfig";
import Tilt from "react-parallax-tilt";

const AboutUsMain = () => {
  return (
    <div className="about-us-main">
      <ParticlesBackground />
      <Tilt>
        <div className="about-us-main-img">
          <img src={aboutUsPageData.main.pandit_img} />
          <h1>{aboutUsPageData.main.pandit_name}</h1>
        </div>
      </Tilt>
    </div>
  );
};

export default AboutUsMain;
