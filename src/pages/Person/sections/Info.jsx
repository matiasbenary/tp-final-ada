import React from "react";
import { useDetail } from "../../../utils/hooks/useDetail";
import ExternalLinks from "../../../components/ExternalLinks";
import Img from "../../../components/Img";

const Info = ({ id }) => {
  const [data] = useDetail("person", id, "", "es-ES");
  const [externalIds] = useDetail("person", id, "external_ids");
  if (data && externalIds) {
    const { facebook_id, imdb_id, instagram_id, twitter_id } = externalIds;
    return (
      <div className="info">
        <Img
          className="info--img"
          src={`https://image.tmdb.org/t/p/w342/${data.profile_path}`}
          alt={`portada de ${data.name}`}
        />
        <div className="info--detail">
          <h2 className="info--title">{data.name}</h2>
          <p className="info--item">{data.biography}</p>

          {externalIds && (
            <ExternalLinks
              classname="info--item"
              linkIds={{
                facebook_id,
                imdb_id,
                instagram_id,
                twitter_id,
                homepage: data.homepage,
              }}
            />
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default Info;
