import React from "react";
import Card from "../Card";

const CardContainer = ({ cards }) => {
  return (
    <div className="cardContainer">
      {cards.map((card) => (
        <Card
          img={card.poster_path}
          title={card.original_title || card.original_name}
        />
      ))}
    </div>
  );
};

export default CardContainer;
