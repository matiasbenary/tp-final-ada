import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [value, setValue] = useState("");
  const history = useHistory();

  const handleChange = (event) => setValue(event.target.value);
  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && value) {
      history.push(`/multi/${value}/page/1`);
    }
  };

  return (
    <div className="search">
      <input
        className="search--input"
        type="text"
        placeholder="Busqueda ..."
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <FiSearch className="search--icon" />
    </div>
  );
};

export default Search;
