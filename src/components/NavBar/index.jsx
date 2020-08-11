import React from "react";
import { FiHome, FiVideo, FiTv } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/" className="navBar--item">
        <FiHome />
      </Link>
      <Link to="/movie" className="navBar--item">
        <FiVideo />
      </Link>
      <Link to="/tv" className="navBar--item">
        <FiTv />
      </Link>
    </div>
  );
};

export default NavBar;
