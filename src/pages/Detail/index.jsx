import React from "react";
import { useRouteMatch, Switch, Route, useParams } from "react-router-dom";
import Info from "./sections/Info";
import Cast from "./sections/Cast";
import Similar from "./sections/Similar";
import Videos from "./sections/Videos";
import Seasons from "./sections/Seasons";
import NavTabs from "./sections/NavTabs";

const Detail = () => {
  const { path, url } = useRouteMatch();
  const { media, id } = useParams();
  return (
    <div>
      <NavTabs media={media} url={url} />
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
