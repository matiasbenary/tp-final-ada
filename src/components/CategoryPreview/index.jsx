import React from "react";
import CardContainer from "../CardContainer";
import { Link } from "react-router-dom";
import { useTitle } from "../../utils/hooks/useTitle";
import { useSearch } from "../../utils/hooks/useSearch";
import { FiArrowRight } from "react-icons/fi";

const CategoryPreview = ({ media, category }) => {
  const [data, isLoading] = useSearch(media, category);

  const title = useTitle(media, category);

  if (isLoading) return <h1>Cargando...</h1>;
  if (data) {
    return (
      <div style={{ margin: "20px 0" }}>
        <Link
          className="categoryPreview--link"
          to={`/${media}/${category}/page/1`}
        >
          <h1 className="categoryPreview--title">{title}</h1>
          <FiArrowRight className="categoryPreview--icon" />
        </Link>
        <CardContainer
          media={media}
          cards={data.results.slice(0, 5)}
        ></CardContainer>
      </div>
    );
  }

  return null;
};

export default CategoryPreview;
