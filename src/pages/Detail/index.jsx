import React from "react";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Info from "./sections/Info";
import Cast from "./sections/Cast";
import Similar from "./sections/Similar";
import Videos from "./sections/Videos";
import Seasons from "./sections/Seasons";

const Detail = () => {
  const { path, url } = useRouteMatch();
  const { media, id } = useParams();
  return (
    <div>
      <Link to={`${url}/info`}>Info</Link>

      {media === "tv" ? (
        <Link to={`${url}/seasons/1`}>Episodios</Link>
      ) : (
        <Link to={`${url}/videos`}>Videos</Link>
      )}

      <Link to={`${url}/cast`}>Reparto</Link>
      <Link to={`${url}/similar`}>Similares</Link>

      <Switch>
        <Route path={`${path}/info`}>
          <Info media={media} id={id} />
        </Route>
        <Route path={`${path}/seasons/:season`}>
          <Seasons id={id} />
        </Route>
        <Route path={`${path}/videos`}>
          <Videos media={media} id={id} />
        </Route>
        <Route path={`${path}/cast`}>
          <Cast media={media} id={id} />
        </Route>
        <Route path={`${path}/similar`}>
          <Similar media={media} id={id} />
        </Route>
      </Switch>
    </div>
  );
};

export default Detail;
