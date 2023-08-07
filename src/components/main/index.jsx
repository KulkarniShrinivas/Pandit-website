import React, { useEffect, useRef } from "react";
import { mainData } from "./mainData";
import "./main.scss";
import Typed from "typed.js";
import homeImg from "../../assets/home.png";
import CustomButton from "../custom-button";

const Main = () => {
  const el = useRef(null);
  console.log(el);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: mainData.typeWriterText,
        typeSpeed: 50,
        loop: true,
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }
  }, []);
  return (
    <section className="main">
      <div className="half-circle"></div>
      <div className="half-circle-2"></div>

      <div className="main-headings">
        <h1>Experience</h1>
        <span ref={el} />
      </div>
      <div className="btn-container">
        <CustomButton text={"Book Now"} />
      </div>
      <div className="img-div">
        <img src={homeImg} />
      </div>
    </section>
  );
};

export default Main;
