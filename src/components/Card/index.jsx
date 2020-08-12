import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, title }) => {
  return (
    <Link className="card">
      <div className="card--img--wrapper">
        <img
          className="card--img"
          src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${img}`}
          alt={title}
        />
      </div>

      <h3 className="card--title">{title}</h3>
    </Link>
  );
};

export default Card;
