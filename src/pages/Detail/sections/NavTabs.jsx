import React from "react";
import { NavLink } from "react-router-dom";

const NavTabs = ({ url, media }) => {
  return (
    <div className="navTabs--conatiner">
      <NavLink
        className="navTabs--links"
        activeClassName="navTabs--links__active"
        to={`${url}/info`}
      >
        INFO
      </NavLink>

      {media === "tv" ? (
        <NavLink
          className="navTabs--links"
          activeClassName="navTabs--links__active"
          to={`${url}/seasons/1`}
        >
          EPISODIOS
        </NavLink>
      ) : (
        <NavLink
          className="navTabs--links"
          activeClassName="navTabs--links__active"
          to={`${url}/videos`}
        >
          VIDEOS
        </NavLink>
      )}

      <NavLink
        className="navTabs--links"
        activeClassName="navTabs--links__active"
        to={`${url}/cast`}
      >
        REPARTO
      </NavLink>
      <NavLink
        className="navTabs--links"
        activeClassName="navTabs--links__active"
        to={`${url}/similar`}
      >
        SIMILARES
      </NavLink>
    </div>
  );
};

export default NavTabs;
