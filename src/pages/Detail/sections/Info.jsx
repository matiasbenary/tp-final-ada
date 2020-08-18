import React from "react";
import { useSearch } from "../../../utils/hooks/useSearch";
import { useDetail } from "../../../utils/hooks/useDetail";
import { Link } from "react-router-dom";
import ExternalLinks from "../../../components/ExternalLinks";
import Img from "../../../components/Img";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatCurrency = (value) => currencyFormatter.format(value).slice(0, -3);

const Info = ({ media, id }) => {
  const [data, isLoading] = useDetail(media, id, "", "es-ES");
  const [externalIds] = useDetail(media, id, "external_ids");
  if (data && externalIds) {
    const { facebook_id, imdb_id, instagram_id, twitter_id } = externalIds;

    return (
      <div className="info">
        <Img
          className="info--img"
          src={`https://image.tmdb.org/t/p/w342/${data.poster_path}`}
          alt={`portada de ${data.title || data.name}`}
        />
        <div className="info--detail">
          <h2 className="info--title">{data.title || data.name}</h2>
          <p className="info--item">
            calificacion:
            {data.vote_average}
          </p>

          <p className="info--item">{data.overview}</p>
          {media === "tv" && (
            <>
              <p className="info--item">Temporadas: {data.number_of_seasons}</p>
              <p className="info--item">Episodios: {data.number_of_episodes}</p>
            </>
          )}

          <p className="info--item">
            Duración: {data.runtime || data.episode_run_time[0]} min
          </p>
          <p className="info--item">
            Géneros:{" "}
            {data.genres.map((genre) => (
              <Link
                className="info--genre"
                key={genre.id}
                to={`/movie/${genre.name}/${genre.id}/page/1`}
              >
                {genre.name}
              </Link>
            ))}
          </p>
          {media === "movies" && (
            <>
              <p>Presupuesto: {formatCurrency(data.budget)}</p>
              <p>Recaudacion: {formatCurrency(data.revenue)}</p>
            </>
          )}

          <p className="info--item">
            Producción:{" "}
            {data.production_companies
              .map((company) => company.name)
              .join(", ")}
          </p>
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

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  return null;
};

export default Info;
