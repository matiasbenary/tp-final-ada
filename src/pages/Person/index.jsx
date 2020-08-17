import React from "react";
import {
  useRouteMatch,
  useParams,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import Info from "./sections/Info";
import Credits from "./sections/Credits";

const Person = () => {
  const { path, url } = useRouteMatch();
  const { id } = useParams();
  return (
    <div>
      <Link to={`${url}/info`}>Reparto</Link>
      <Link to={`${url}/credits`}>Creditos</Link>
      <Switch>
        <Route path={`${path}/info`}>
          <Info id={id} />
        </Route>
        <Route path={`${path}/credits`}>
          <Credits id={id} />
        </Route>
      </Switch>
    </div>
  );
};

export default Person;
