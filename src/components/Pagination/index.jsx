import React from "react";
import { Link } from "react-router-dom";

const getItems = (current, totalPage, getUrl) => {
  const offset = 2;
  const aux = [];
  // 500 -2 498  45+2 47  499
  /* 
  totalPage =500
  principio
  1 2 3 4 5
currentPage = 500
496 497 498 499 500
currentPage = 499
496 497 498 499 500
currentPage = 498
496 497 498 499 500
currentPage = 450
448 449 450 451 452

*/
  let upperLimit = totalPage - offset > current ? current + offset : totalPage;

  /* 
  c 1
  1 2 3 4 5
  c 2 
  12345
  c 3
  12345 
  c 4
  23456
  c10
  8 9 10 11 12
  
  */
  // curren - offte > 0 ? current : 1

  let lowerLimit = current - offset > 0 ? current - offset : 1;

  // 500 500 -2
  // 500 500 -2 -2
  // 500 499 -2 -1
  // 500 498 -2 0
  // 500 -2 498
  if (upperLimit - current - offset < 0) {
    lowerLimit -= current + offset - upperLimit;
  }

  // 2 - 1
  if (current - lowerLimit - offset < 0) {
    upperLimit += lowerLimit + offset - current;
  }

  for (let indice = lowerLimit; indice <= upperLimit; indice++) {
    aux.push(<Link to={getUrl(indice)}>{indice}</Link>);
  }

  return aux;
};

const Pagination = ({ media, category, page, totalPage }) => {
  const getUrl = (numPage) => {
    return `/${media}/${category}/page/${numPage}`;
  };

  const before = page > 1 ? getUrl(Number(page) - 1) : null;
  const next = page < totalPage ? getUrl(Number(page) + 1) : null;

  const items = getItems(Number(page), totalPage, getUrl);

  return (
    <div>
      {before && <Link to={before}>Anterior</Link>}
      <h3>{items}</h3>
      {next && <Link to={next}>Siguiente</Link>}
    </div>
  );
};

export default Pagination;
