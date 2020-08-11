import React from "react";
import CardContainer from "../CardContainer";
import api from "../../api";
import { Link } from "react-router-dom";
//media tv o movie - si es serie o pelicula
//category top rated - esta en el aire etc
const CategoryPreview = ({ media, category }) => {
  return (
    <div>
      <Link to={`/${media}/${category}/page/1`}>
        <h1>
          {media} - {category}
        </h1>
      </Link>

      <CardContainer cards={api.results.slice(0, 1)}></CardContainer>
    </div>
  );
};

export default CategoryPreview;
