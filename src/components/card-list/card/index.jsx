import React from "react";
import "./style.scss";

const Card = ({ poojaTitle, src }) => {
  return (
    <article className="card">
      <header className="card-header">
        <h2>{poojaTitle}</h2>
      </header>
      <div className="card-img">
        <img src={src} />
      </div>

      <div className="tags">
        <a href="#">Book Now</a>
        <a href="#">View More</a>
      </div>
    </article>
  );
};

export default Card;
