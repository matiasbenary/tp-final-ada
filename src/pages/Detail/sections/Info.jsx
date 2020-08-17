import React from "react";
import { useSearch } from "../../../utils/hooks/useSearch";
import { useDetail } from "../../../utils/hooks/useDetail";
import { Link } from "react-router-dom";
import ExternalLinks from "../../../components/ExternalLinks";

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
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w342/${data.poster_path}`}
          alt={`portada de ${data.title}`}
        />
        <div>
          <h2>{data.title}</h2>
          <p>
            calificacion:
            {data.vote_average}
          </p>

          <p>Descripcion:{data.overview}</p>
          {media === "tv" && (
            <>
              <p>Temporadas: {data.number_of_seasons}</p>
              <p>Episodios: {data.number_of_episodes}</p>
            </>
          )}

          <p>Duración:{data.runtime || data.episode_run_time[0]} min</p>
          <p>
            Géneros:{" "}
            {data.genres.map((genre) => (
              <Link
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

          <p>
            Producción:{" "}
            {data.production_companies
              .map((company) => company.name)
              .join(", ")}
          </p>
          {externalIds && (
            <ExternalLinks
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
