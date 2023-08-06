import React, { useEffect, useRef } from "react";
import "./style.scss";
import Card from "../card";

const CardList = () => {
  const cardListRef = useRef();

  function scrollToRight() {
    console.log(cardListRef.current);
    // const chatContainer = document.getElementById("chatContainer");
    cardListRef.current.scrollLeft =
      cardListRef.current.scrollWidth - cardListRef.current.clientWidth;
  }

  useEffect(() => {
    window.addEventListener("load", scrollToRight);
  }, []);

  return (
    <section className="card-list-section">
      <h2>Recommended Pujas</h2>
      <div ref={cardListRef} className="card-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default CardList;
