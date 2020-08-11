import React from "react";
import Card from "../Card";

const CardContainer = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <Card img={card.poster_path} title={card.original_title} />
      ))}
    </div>
  );
};

export default CardContainer;
