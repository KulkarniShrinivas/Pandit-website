import React from "react";
import Tilt from "react-parallax-tilt";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-component">
      <Tilt>
        <div className="card">
          <h1>Title</h1>
          <p>
            Best in Class Pooja Services as per Vedic Standards with Quality.
            Perform your pooja with the Best group of Professional Purohit &
            Pandit
          </p>
          <button className="btn">Book Now</button>
        </div>
      </Tilt>
    </div>
  );
};

export default Home;
