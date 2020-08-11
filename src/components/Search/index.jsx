import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="search">
      <input className="search--input" type="text" placeholder="Busqueda ..." />
      <FiSearch className="search--icon" />
    </div>
  );
};

export default Search;
