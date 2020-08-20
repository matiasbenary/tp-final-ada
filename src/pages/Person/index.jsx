import React from "react";
import {
  useRouteMatch,
  useParams,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Info from "./sections/Info";
import Credits from "./sections/Credits";

const Person = () => {
  const { path, url } = useRouteMatch();
  const { id } = useParams();
  return (
    <>
      <div className="navTabs--conatiner">
        <NavLink
          className="navTabs--links"
          activeClassName="navTabs--links__active"
          to={`${url}/info`}
        >
          INFORMACION
        </NavLink>
        <NavLink
          className="navTabs--links"
          activeClassName="navTabs--links__active"
          to={`${url}/credits`}
        >
          CREDITOS
        </NavLink>
      </div>
      <div className="container">
        <div className="detail">
          <Switch>
            <Route path={`${path}/info`}>
              <Info id={id} />
            </Route>
            <Route path={`${path}/credits`}>
              <Credits id={id} />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Person;
