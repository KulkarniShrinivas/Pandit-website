import React, { useEffect, useRef } from "react";
import "./style.scss";
import Card from "./card/index";
import CustomButton from "../custom-button";
import { cardListData } from "./cardListData";
import { useNavigate } from "react-router-dom";

const CardList = () => {
  const cardListRef = useRef();
  const navigate = useNavigate();

  function scrollToRight() {
    cardListRef.current.scrollLeft =
      cardListRef.current.scrollWidth - cardListRef.current.clientWidth - 100;

    console.log(
      cardListRef.current.scrollWidth,
      cardListRef.current.clientWidth - 100
    );
  }

  useEffect(() => {
    scrollToRight();
  }, []);

  return (
    <>
      <section className="card-list-section">
        <h2 className="card-list-heading">Recommended Pujas</h2>
        <CustomButton
          text={"View All Pujas"}
          onClick={() => navigate("/allpujas")}
        />
        <div ref={cardListRef} className="card-list">
          {cardListData.map((card, index) => (
            <Card
              key={card.poojaTitle + index}
              poojaTitle={card.poojaTitle}
              src={card.src}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CardList;
