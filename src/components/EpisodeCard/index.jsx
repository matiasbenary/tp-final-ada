import React from "react";
import Img from "../Img";

const EpisodeCard = ({ img, title, overview, episodeNumber }) => {
  return (
    <div className="episodeCard">
      <Img
        src={`https://image.tmdb.org/t/p/w400/${img}`}
        alt={`title imagen`}
      />
      <h4 className="episodeCard--title">
        <span className="episodeCard--title__blue">EP{episodeNumber} </span>
        {title}
      </h4>
      <p className="episodeCard--overview">{overview}</p>
    </div>
  );
};

export default EpisodeCard;
