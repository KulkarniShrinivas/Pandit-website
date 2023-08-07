import React, { useEffect, useRef } from "react";
import { mainData } from "./mainData";
import "./main.scss";
import Typed from "typed.js";

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
      <div className="main-headings">
        <h1>
          <span ref={el} />
        </h1>
      </div>
      <div>Form</div>
    </section>
  );
};

export default Main;
