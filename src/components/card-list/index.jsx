import React, { useEffect, useRef } from "react";
import "./style.scss";
import Card from "./card/index";
import CustomButton from "../custom-button";
import { cardListData } from "./cardListData";

const CardList = () => {
  const cardListRef = useRef();

  function scrollToRight() {
    cardListRef.current.scrollLeft =
      cardListRef.current.scrollWidth - cardListRef.current.clientWidth;
  }

  useEffect(() => {
    scrollToRight();
  }, []);

  return (
    <>
      <section className="card-list-section">
        <h2>Recommended Pujas</h2>
        <CustomButton text={"View All Pujas"} />
        <div ref={cardListRef} className="card-list">
          {cardListData.map((card) => (
            <Card poojaTitle={card.poojaTitle} src={card.src} />
          ))}
        </div>
      </section>
    </>
  );
};

export default CardList;
