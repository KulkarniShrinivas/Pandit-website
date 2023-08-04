import React from "react";
import ganeshImage from "../../assets/ganesh_small_comp.png";
import "./style.scss";

const Card = () => {
  return (
    <article class="card">
      <header class="card-header">
        <h2>Ganesh Puja</h2>
      </header>
      <img src={ganeshImage} className="card-img" />
      <div class="tags">
        <a href="#">Book Now</a>
        <a href="#">View More</a>
      </div>
    </article>
  );
};

export default Card;
