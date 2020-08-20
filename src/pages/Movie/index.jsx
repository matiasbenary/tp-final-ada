import React from "react";
import CategoryPreview from "../../components/CategoryPreview";

const Movie = () => {
  return (
    <div className="container">
      <CategoryPreview media="movie" category="popular" />
      <CategoryPreview media="movie" category="top_rated" />
      <CategoryPreview media="movie" category="upcoming" />
      <CategoryPreview media="movie" category="now_playing" />
    </div>
  );
};

export default Movie;
