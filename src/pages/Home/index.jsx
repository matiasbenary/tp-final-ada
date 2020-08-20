import React from "react";
import CategoryPreview from "../../components/CategoryPreview";

const Home = () => {
  return (
    <div className="container">
      <CategoryPreview media="movie" category="trending" />
      <CategoryPreview media="tv" category="trending" />
    </div>
  );
};

export default Home;
