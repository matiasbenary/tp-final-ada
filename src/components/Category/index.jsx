import React from "react";
import CardContainer from "../CardContainer";
import { useParams } from "react-router-dom";
import { useSearch } from "../../utils/hooks/useSearch";
import { useTitle } from "../../utils/hooks/useTitle";
import Pagination from "../Pagination";

const Category = () => {
  const { media, category, page, searchParam } = useParams();

  const [data, isLoading] = useSearch(media, category, page, searchParam);
  const title = useTitle(media, category);

  if (isLoading) {
    return <h1>Cargando ...</h1>;
  }
  if (data) {
    return (
      <div className="container">
        <h1 className="category--title">{title}</h1>

        <CardContainer media={media} cards={data.results}></CardContainer>
        <Pagination
          url={`${media}/${category}/${searchParam ? `/${searchParam}/` : ""}`}
          page={page}
          totalPage={data.total_pages}
        ></Pagination>
      </div>
    );
  }
  return null;
};

export default Category;
