import React from "react";
import { Link } from "react-router-dom";
import Img from "../Img";

const Card = ({ img, title, media, id, subtitle }) => {
  return (
    <Link to={`/${media}/${id}/info`} className="card">
      <div className="card--img--wrapper">
        <Img className="card--img" src={img} alt={title} />
      </div>

      <h3 className="card--title">{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
    </Link>
  );
};

export default Card;
