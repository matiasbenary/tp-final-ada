import React from "react";
import { useRouteMatch, Switch, Route, useParams } from "react-router-dom";
import Info from "./sections/Info";
import Cast from "./sections/Cast";
import Similar from "./sections/Similar";
import Videos from "./sections/Videos";
import Seasons from "./sections/Seasons";
import NavTabs from "./sections/NavTabs";
import { useDetail } from "../../utils/hooks/useDetail";

const Detail = () => {
  const { path, url } = useRouteMatch();
  const { media, id } = useParams();
  const [data] = useDetail(media, id, "", "es-ES");
  return (
    <>
      {data && (
        <div className="detail--bannerContainer">
          <div className="detail--bannerOverlay"></div>
          <img
            className="detail--bannerImg"
            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
            alt=""
          />
        </div>
      )}
      <div className="container">
        <div className="detail">
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
      </div>
    </>
  );
};

export default Detail;
