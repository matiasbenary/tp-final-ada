import React, { useEffect, useState } from "react";
import CardContainer from "../CardContainer";
import { useParams } from "react-router-dom";
import { useSearch } from "../../utils/hooks/useSearch";
import { useTitle } from "../../utils/hooks/useTitle";
import Pagination from "../Pagination";

const Category = () => {
  const { media, category, page } = useParams();
  const [data, isLoading, isError] = useSearch(media, category, page);
  const title = useTitle(media, category);

  if (isLoading) {
    return <h1>Cargando ...</h1>;
  }
  if (data) {
    return (
      <div>
        <h1>{title}</h1>
        <CardContainer media={media} cards={data.results}></CardContainer>
        <Pagination
          media={media}
          category={category}
          page={page}
          totalPage={data.total_pages}
        ></Pagination>
      </div>
    );
  }
  return null;
};

export default Category;
