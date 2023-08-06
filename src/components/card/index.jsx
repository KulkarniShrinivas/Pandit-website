import React from "react";
import ganeshImage from "../../assets/ganesh_small_comp.png";
import "./style.scss";

const Card = ({ poojaTitle, src }) => {
  return (
    <article className="card">
      <header className="card-header">
        <h2>Ganesh Puja</h2>
      </header>
      <div className="card-img">
        <img src={ganeshImage} />
      </div>

      <div className="tags">
        <a href="#">Book Now</a>
        <a href="#">View More</a>
      </div>
    </article>
  );
};

export default Card;
