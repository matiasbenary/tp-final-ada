import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, title }) => {
  return (
    <Link>
      <img
        src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${img}`}
        alt={title}
      />
      <h3>{title}</h3>
    </Link>
  );
};

export default Card;
